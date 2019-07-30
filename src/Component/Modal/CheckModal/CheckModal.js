

import React, { Component } from 'react';
import {
    Text,
    FlatList,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    TextInput

} from 'react-native';
import Modal from 'react-native-modalbox';
import styles from './Styles';
import { Icon } from 'native-base';
import moment from 'moment';

export default class CheckModal extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         asset: null,
    //     }
    // }
    componentDidMount() {
        this.refs.modal.open();
    }
    // showAddModal = (asset) => {
    //     // console.log(asset)
    //     this.setState({ asset: asset });
    //     this.refs.modal.open();
    // }
    onPress(){
        this.refs.modal.close();
        this.props.navigation.goBack();
        // this.props.navigation.navigate("Scanner");
    }

    render() {
        return (
            // console.log(this.props.navigation.state.params),
            <Modal
                swipeToClose={false}
                backButtonClose={true}
                transparent={true}
                position='center'
                backdrop={true}
                ref={"modal"}
                backdropPressToClose={false}
                style={{ justifyContent: 'center', height: 200, backgroundColor: '#fff', borderRadius: 30 }}
            >
                <View style={styles.orderRow}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Asset Id:</Text>
                        <Text style={styles.textvalue}>ASS{this.props.navigation.state.params.id}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Name:</Text>
                        <Text style={styles.textvalue}>{this.props.navigation.state.params.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>CreateAt:</Text>
                        <Text style={{ ...this.state, color: '#f44336' }}>{moment(this.props.navigation.state.params.createdAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>UpdateAt:</Text>
                        <Text style={styles.textvalue}>{moment(this.props.navigation.state.params.createdAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Quantity:</Text>
                        <Text style={{ ...this.state, color: '#f44336' }}>{this.props.navigation.state.params.quantity}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>your asset have been check</Text>
                    <TouchableOpacity onPress={() => this.onPress()}>
                        <Icon type={"FontAwesome"} name="check" style={{ fontSize: 60, color: "#4ac51d" }}></Icon>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

