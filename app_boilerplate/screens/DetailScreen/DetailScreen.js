import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput } from 'react-native';

import MovieDetail from '../../components/MovieDetail/MovieDetail';

const DertialScreen = ({ navigation: { state } }) => {
    const { params } = state;

    return (
        <ScrollView>
            <MovieDetail movie={params} />
        </ScrollView>
    );
}

export default DertialScreen;