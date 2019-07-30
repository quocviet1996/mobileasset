

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
import CheckModal from './CheckModal/CheckModal';

export default class CheckModal extends Component {
    componentDidMount(){
        this.refs.checkmodal.showAddModal();

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <CheckModal ref={'checkmodal'} parent={this}></CheckModal>
            </View>

        )
    }
}

