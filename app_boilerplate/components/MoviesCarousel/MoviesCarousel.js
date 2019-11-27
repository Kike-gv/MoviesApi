import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const MoviesCarousel = ({ moviesList }) => {
    return (
        <View>
            <Text>el carousel ira aqui</Text>

            <Text>{moviesList}</Text>
        </View>
    );
}

export default MoviesCarousel;