

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

export default class CheckModal extends Component {
    showAddModal = () => {
        this.refs.modal.open();
    }

    render() {
        return (
            <Modal
                transparent={true}
                position='center'
                backdrop={true}
                ref={"modal"}
                style={{ justifyContent: 'center', height: 350, backgroundColor: 'black', borderRadius: 30 }}
            >
            </Modal>
        )
    }
}

