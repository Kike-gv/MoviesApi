import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity,Dimensions, StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeInputValue } from '../../redux/actions/InputActions';

import MoviesGrid from '../../components/MoviesGrid';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);
    const dispatch = useDispatch();


    return (
        <ScrollView style={styles.homeScreen}>
            <MoviesGrid navigation={navigation} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    homeScreen: {
        minHeight: height,
        backgroundColor: '#111111',
    },
});

export default HomeScreen;