

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

export default class AddAssetModal extends Component {

    showAddModal = () => {
        // console.log(asset)
        // this.setState({ asset: asset });
        // this.refs.modal.open();
    }



    render() {
        return (
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
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tài Sản Không Tồn Tại</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>bạn có muốn thêm tài sản?</Text>
                </View>

            </Modal>

        )
    }
}

