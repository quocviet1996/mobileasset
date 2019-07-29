

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

export default class CheckModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asset: null,
        }
    }
    showAddModal = (asset) => {
        // console.log(asset)
        this.setState(asset);
        this.refs.modal.open();
    }

    render() {
        return (
            <Modal
                transparent={true}
                position='center'
                backdrop={true}
                ref={"modal"}
                backdropPressToClose={false}
                style={{ justifyContent: 'center', height: 300, backgroundColor: '#fff', borderRadius: 30 }}
            >
                 <View style={styles.orderRow}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Asset Id:</Text>
                        <Text style={styles.textvalue}>ASS{this.props.asset.id}</Text>
                    </View>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Name:</Text>
                        <Text style={styles.textvalue}>{this.state.asset.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>CreateAt:</Text>
                        <Text style={{ ...this.state, color: '#C21C70' }}>{moment(this.state.asset.createdAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>UpdateAt:</Text>
                        <Text style={styles.textvalue}>{moment(this.state.asset.createdAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Quantity:</Text>
                        <Text style={{ ...this.state, color: '#C21C70' }}>{this.state.asset.quantity}</Text>
                    </View> */}
                </View> 
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => this.refs.modal.disabled()}>
                    <Icon type={"FontAwesome"} name="check" style={{ fontSize: 40, color: "#4ac51d" }}></Icon>
                    </TouchableOpacity>

                </View>
            </Modal>
        )
    }
}

