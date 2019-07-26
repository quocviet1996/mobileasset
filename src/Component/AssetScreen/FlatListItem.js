
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import styles from './Styles';
export default class FlatListItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.orderRow}>
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
                    <Text style={{ ...this.state, color: '#C21C70' }}>{item.createdAt}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textName}>UpdateAt:</Text>
                    <Text style={styles.textvalue}>{item.updatedAt}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.textName}>Quantity:</Text>
                    <Text style={{ ...this.state, color: '#C21C70' }}>{item.quantity}</Text>
                </View>
            </View>
        )
    }
}
