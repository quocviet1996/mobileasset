
import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, FlatList,
    RefreshControl, ActivityIndicator,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { assetAction, assetPull, signOutAction } from '../../Redux/action';
import FlatListItem from './FlatListItem';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import styles from './Styles';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import { removeAccountUser } from '../../Storage/storage';

const { width } = Dimensions.get('window');
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class Asset extends Component {
    static navigationOptions = ({ navigation }) => {
        header = null;
        return { header }
    };
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            pageSize: 5,
            asset: [],
            loading: false,
            refresh: false,
        };
    }
    componentDidMount() {
        // this.props.assetPull({userId: this.props.user[0].id, pageIndex: this.state.pageIndex, pageSize: this.state.pageSize})
        // .then(() => console.log(this.props.asset))
        // this.setState({ loading: true });
        this.props.assetAction({ userId: this.props.user[0].id, pageIndex: this.state.pageIndex, pageSize: this.state.pageSize })
            .then(() => {
                this.setState({ asset: this.props.asset })
            })
    }

    handleLoadMore = () => {

        if (!this.onEndReachedCalledDuringMomentum && !this.state.loading) {
            this.setState({ loading: true })
            const page = this.state.pageIndex + 1;
            this.props.assetAction({ userId: this.props.user[0].id, pageIndex: page, pageSize: this.state.pageSize })
                .then(() => {
                    if (this.props.asset.length > 0) {
                        this.setState({ asset: this.state.asset.concat(this.props.asset), pageIndex: this.state.pageIndex + 1, loading: false })
                    }
                    else {
                        this.setState({ loading: false });
                        return Alert.alert("Không còn tài sản");

                    }
                })
            this.onEndReachedCalledDuringMomentum = true;
        }
    };
    onRefresh() {
        this.setState({ refresh: true })
        try {
            const page = 1;
            this.setState({ pageIndex: 1 })
            this.props.assetPull({ userId: this.props.user[0].id, pageIndex: page, pageSize: this.state.pageSize })
                .then(() => this.setState({ asset: this.props.asset, pageIndex: this.state.pageIndex + 1, refresh: false }))
        }
        catch{
            this.setState({ refresh: false })
        }
    }
    renderFooter = () => {
        return (
            //Footer View with Load More
            <View style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {this.state.loading ?
                    <ActivityIndicator color='black' size='large' />
                    : null}
            </View>
        );

    };
    onFlatList(asset) {
        if (asset.length > 0) {
            return <FlatList
                data={asset}
                renderItem={({ item }) => { return <FlatListItem item={item} parent={this} /> }}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refresh}
                        onRefresh={() => this.onRefresh()}
                    />
                }
                onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                onEndReachedThreshold={0.01}
                onEndReached={this.handleLoadMore}
                ListFooterComponent={this.renderFooter}
            />
        }
    }
    onSignOut() {
        // console.log("a")
        // this.props.signOutAction();
        removeAccountUser().then(() => {
            this.props.navigation.navigate('Login');
        })
        // removeAccountUser();
        // this.props.navigation.navigate("Login");
        // this.props
        // .then(() => console.log(this.props.user))

    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };
    render() {
        return (
            <View style={styles.wrapper}>
                <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 0.5, y: 1.0 }}
                    locations={[0, 0.5, 0.6]}
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 10 }}>
                        <View></View>
                        <Text style={styles.headerTitle}>{"Tài Sản Của " + toTitleCase(this.props.user[0].name)}</Text>
                        <TouchableOpacity onPress={() => this.onSignOut()}>
                            <Icon type="FontAwesome" name="sign-out" style={{ color: "red", fontSize: 25, }}> </Icon>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <View style={styles.body}>
                    {this.onFlatList(this.state.asset)}
                </View>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.SignInReducer.User,
        asset: state.assetReducer.asset,
        checkAsset: state.assetReducer

    }
}
function dispatchToProps(dispatch) {
    return bindActionCreators({
        assetAction,
        assetPull,
        signOutAction
    }, dispatch);
}


export default connect(mapStateToProps, dispatchToProps)(Asset);



