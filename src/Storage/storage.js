import AsyncStorage from '@react-native-community/async-storage';
const AccountUser = 'AccountUser';

const setAccountUser = async (data) => {
    return await AsyncStorage.setItem(AccountUser, data);
};

const getAccountUser = async () => {
    return await AsyncStorage.getItem(AccountUser);
};
const removeAccountUser = async () => {
    return await AsyncStorage.removeItem(AccountUser)
}
export {
    setAccountUser,
    getAccountUser,
    removeAccountUser
}