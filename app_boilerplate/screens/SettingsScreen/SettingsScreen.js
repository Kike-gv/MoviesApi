import React from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeInputValue } from '../../redux/actions/InputActions';
import MovieInput from '../../components/MovieInput';

const { width, height } = Dimensions.get('window');

const SettingsScreen = () => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);
    const dispatch = useDispatch();

    return (
        <View style={styles.settingsScreen}>
            <MovieInput/>
            <Text>Prueba de redux hooks</Text>
            <Text>{actualizeInput}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsScreen: {
        minHeight: height,
        backgroundColor: '#111111',
        padding: 16
    },
});

export default SettingsScreen;