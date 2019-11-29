import React from 'react';
import { Text, View, TextInput,StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeInputValue } from '../../redux/actions/InputActions';

const MovieInput = () => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);
    const dispatch = useDispatch();

    return (
        <TextInput
            style={styles.movieInput}
            placeholder='Busca tu pelicula...'
            onChangeText={(text) => dispatch(actualizeInputValue(text))}
            value={actualizeInput}
        />
    );
}

const styles = StyleSheet.create({
    movieInput: {
        height: 40, 
        borderColor: 'lightgrey', 
        borderWidth: 1,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 48,
        marginBottom: 16,
        color: 'white',
    },
});

export default MovieInput;