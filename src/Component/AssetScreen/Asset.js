
import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, FlatList,
    RefreshControl,
} from 'react-native';
import backSpecial from '../../img/forward.png';
import { connect } from 'react-redux';
import { assetAction } from '../../Redux/action';
import FlatListItem from './FlatListItem';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { Icon } from 'native-base';
import { black } from 'ansi-colors';
import styles from './Styles';
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
            refresh: false,
            pageIndex: 1,
            pageSize: 3,
            asset:[]
        };
    }
    componentDidMount() {
        this.props.assetAction({ userId: this.props.user[0].id, pageIndex: this.state.pageIndex, pageSize: this.state.pageSize })
        .then(() => {
            this.setState({asset:this.props.asset})
        })
    }
    onRefresh() {
        try {
            const page = this.state.pageIndex + 1;
            this.setState({ refresh: true })
            this.props.assetAction({ userId: this.props.user[0].id, pageIndex: page, pageSize: this.state.pageSize })
            .then(() =>{
                this.setState({asset:this.props.asset.concat(this.state.asset),pageIndex:this.state.pageIndex + 1,refresh:false})
            })
        }
        catch{
            this.setState({ refresh: false })
        }

    }

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
            />
        }
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <Icon type="FontAwesome" name="arrow-left" style={{ fontSize: 20, color: "black" }}></Icon>
                    </TouchableOpacity> */}
                    <Text style={styles.headerTitle}>{"Tài Sản Của " + toTitleCase(this.props.user[0].name)}</Text>
                    <View />
                </View>
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
        assetAction
    }, dispatch);
}


export default connect(mapStateToProps, dispatchToProps)(Asset);



