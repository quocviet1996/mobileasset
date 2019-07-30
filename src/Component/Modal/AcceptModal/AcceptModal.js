

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
import AddAssetModal from '../AddAssetModal';

export default class AcceptModal extends Component {
    componentDidMount() {
        this.refs.modal.open();

    }
    onPressClose(){
        this.refs.modal.close();
        this.props.navigation.goBack();
    }
    onPressAdd(){
        this.refs.modal.close();
        this.ref.addmodal.showAddModal(); 
    }

    render() {
        return (
            // <View>
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
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Tài Sản Không Tồn Tại</Text>
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                    <Text style={{fontSize:15,fontWeight:"bold"}}>bạn có muốn thêm tài sản?</Text>
                </View>
                    <View style={{ flex: 1, flexDirection: "row",justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => this.onPressAdd()}>
                            <Icon type={"FontAwesome"} name="check" style={{ fontSize: 40, color: "#4ac51d" }}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onPressClose()}>
                            <Icon type={"FontAwesome"} name="times" style={{ fontSize: 40, color: "red" }}></Icon>
                        </TouchableOpacity>
                    </View>
            </Modal>


        )
    }
}

