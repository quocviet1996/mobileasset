

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
import { checkScannedAction, changeScanned } from '../../../Redux/action';
import { LinearTextGradient } from 'react-native-text-gradient';
class ExistsModal extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            asset: [],
            isScanned: false,
            isVisible: false
        })
    }
    showAddModal = () => {
        this.refs.modal.open();
        setTimeout(() => {
            this.refs.modal.close();
        }, 3000);
    }
    render() {
        return (
            <Modal
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
                {/* <View style={styles.orderRow}> */}
                    <LinearTextGradient
                        style={{ fontWeight: "bold", fontSize: 72 }}
                        locations={[0, 1]}
                        colors={["red", "blue"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        Tài sản Của bạn đã được kiểm tra rồi
                    </LinearTextGradient>
                {/* </View> */}
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
        isScanned: state.checkScannedReducer.isScanned
    }
}
function dispatchToProps(dispatch) {
    return bindActionCreators({
        checkScannedAction,
        changeScanned
    }, dispatch)
}
export default connect(mapStateToProps, dispatchToProps, null, { forwardRef: true })(ExistsModal);

