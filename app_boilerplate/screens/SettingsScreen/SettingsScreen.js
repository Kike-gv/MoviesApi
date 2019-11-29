import React from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';

import MovieInput from '../../components/MovieInput';
import MoviesGrid from '../../components/MoviesGrid';

const { width, height } = Dimensions.get('window');

const SettingsScreen = ({ navigation }) => {

    return (
        <View style={styles.settingsScreen}>
            <MovieInput />
            <ScrollView>
                <MoviesGrid navigation={navigation} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    settingsScreen: {
        minHeight: height,
        backgroundColor: '#111111',
    },
    tryText: {
        color: 'white'
    },
});

export default SettingsScreen;