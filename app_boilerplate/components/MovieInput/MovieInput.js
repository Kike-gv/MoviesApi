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
            placeholder='Escribe algo para que redux lo actualize'
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
        marginTop: 32
    },
});

export default MovieInput;