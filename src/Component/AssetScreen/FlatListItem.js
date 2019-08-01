
import React, { Component, PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import styles from './Styles';
import moment from 'moment';

export default class FlatListItem extends PureComponent {
    GenerateCode(){
        // console.log(JSON.stringify(this.props.item.serialnumber))
        this.props.parent.props.navigation.navigate("A",JSON.stringify(this.props.item))
    }
    render() {
        const { item } = this.props;
        return (
            <View style={styles.orderRow}>
                <TouchableOpacity onPress={() => this.GenerateCode()}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Asset Id:</Text>
                        <Text style={styles.textvalue}>ASS{item.id}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Name:</Text>
                        <Text style={styles.textvalue}>{item.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>CreateAt:</Text>
                        <Text style={{ ...this.state, color: '#C21C70' }}>{moment(item.createdAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>UpdateAt:</Text>
                        <Text style={styles.textvalue}>{moment(item.createdAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Quantity:</Text>
                        <Text style={{ ...this.state, color: '#C21C70' }}>{item.quantity}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
