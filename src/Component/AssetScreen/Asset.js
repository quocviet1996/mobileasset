
import React, { Component } from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, FlatList
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

class Asset extends Component {
    static navigationOptions = ({ navigation }) => {
        header = null;
        return { header }
    };
    constructor(props) {
        super(props);
        this.state = { arrOrder: [] };
    }
    componentDidMount() {
        // console.log(this.props.user[0].id)
        this.props.assetAction(this.props.user[0].id);
    }

    onFlatList(asset) {
        // console.log(asset)
        if (asset.length > 0) {
            return <FlatList
                data={asset}
                renderItem={({ item }) => { return <FlatListItem item={item} parent={this} /> }}
                keyExtractor={(item) => item.id.toString()}
            />
        }
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <Icon type="FontAwesome" name="arrow-left" style={{ fontSize: 20, color: "black" }}></Icon>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{"Tài Sản Của " + this.props.user[0].name}</Text>
                    <View />
                </View>
                <View style={styles.body}>
                    {this.onFlatList(this.props.asset)}
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



