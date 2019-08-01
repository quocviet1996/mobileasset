

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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkScannedAction } from '../../../Redux/action';
import {changeScanned} from '../../../services/api';
class CheckModal extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            asset: [],
            isScanned: false,
            isVisible: false
        })
    }
    showAddModal = (asset, isScanned) => {
        this.props.checkScannedAction({ id: asset.id })
            .then(() => {
                if (!this.props.hasCheck[0].isScanned){
                    changeScanned({id:asset.id})
                    .then((value) => console.log(value))

                    this.setState({ asset: asset, isScanned }, () => {
                        this.refs.modal.open();
                        setTimeout(() => {
                            this.refs.modal.close();
                        }, 2000);
                    });
                }
                else{

                }
                
                // console.log(this.props.hasCheck)
            })

        // console.log(asset)
      

        // this.refs.modal.open();
    }
    // onPress() {
    //     this.refs.modal.close();
    //     this.props.navigation.goBack();
    //     // this.props.navigation.navigate("Scanner");
    // }

    render() {
        const { id, name, createdAt, updateAt, quantity } = this.state.asset;
        // const { id, name, createdAt, updateAt, quantity } = this.props.navigation.state.params;

        return (
            // console.log(this.props.navigation.state.params),
            <Modal
                // isVisible={isDisplayCheckModal}
                swipeToClose={false}
                // backButtonClose={true}
                animationType={"slide"}
                // onShow={() => this.onShow()}
                transparent={false}
                position='center'
                backdrop={true}
                ref={"modal"}
                backdropPressToClose={false}
                style={{ justifyContent: 'center', height: 200, backgroundColor: '#fff', borderRadius: 30 }}
            >
                <View style={styles.orderRow}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Asset Id:</Text>
                        <Text style={styles.textvalue}>ASS{id}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Name:</Text>
                        <Text style={styles.textvalue}>{name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>CreateAt:</Text>
                        <Text style={{ ...styles.textvalue, color: '#f44336' }}>{moment(createdAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>UpdateAt:</Text>
                        <Text style={styles.textvalue}>{moment(updateAt).format("DD-MM-YYYY : h:mm:ss a")}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textName}>Quantity:</Text>
                        <Text style={{ ...styles.textvalue, color: '#f44336' }}>{quantity}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
                    {/* <Text style={{ fontSize: 15, fontWeight: "bold" }}>your asset have been check</Text> */}
                    <TouchableOpacity onPress={() => this.onPress()}>
                        <Icon type={"FontAwesome"} name="check" style={{ fontSize: 70, color: "#4ac51d" }}></Icon>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}
function mapStateToProps(state) {
    return {
        hasCheck: state.checkScannedReducer.data,
    }

}
function dispatchToProps(dispatch) {
    return bindActionCreators({
        checkScannedAction
    }, dispatch)
}
export default connect(mapStateToProps, dispatchToProps,null,{ forwardRef: true })(CheckModal);

