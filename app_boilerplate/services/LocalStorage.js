import { AsyncStorage } from 'react-native';//Análogo a la api
/**
 * getItem(itemKey)
 * 
 * setItem(itemKey, itemValue)
 */

class LocalStorage {
    constructor(localStorageTitle) {
        this.localStorageTitle = localStorageTitle;
    }

    async getFromLocalStorage() {
        try {
            console.log('get AsyncStorage');
            const value = await AsyncStorage.getItem(this.localStorageTitle);
            console.log("TCL: LocalStorage -> getFromLocalStorage -> value", value)
            if (value !== null) {
                // We have data!!
                console.log(value);
                return JSON.parse(value);
            }
        } catch (error) {
            // Error retrieving data
            console.log('cannot get AsyncStorage');
        }
    }

    async setFromLocalStorage(state) {
        console.log("TCL: LocalStorage -> setFromLocalStorage -> state", state)
        try {
            console.log('set AsyncStorage');
            await AsyncStorage.setItem(this.localStorageTitle, JSON.stringify(state));
        } catch (error) {
            // Error saving data
            console.log('cannot set AsyncStorage')
        }
        return state;
    }

    async checkPreviousLocalStorage(state) {
        const currentData = this.getFromLocalStorage(this.localStorageTitle);
        if (currentData && this.localStorageTitle === 'localFavBeers') {
            return await this.getFromLocalStorage();
        } else {
            return await this.setFromLocalStorage(state);
        }
    }

}

export default LocalStorage;