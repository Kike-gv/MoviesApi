import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeInputValue } from '../../redux/actions/InputActions';

import MoviesGrid from '../../components/MoviesGrid';

const HomeScreen = ({ navigation }) => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);
    const dispatch = useDispatch();


    return (
        <ScrollView>
            <MoviesGrid  navigation={navigation}/>
        </ScrollView>
    );
}

export default HomeScreen;