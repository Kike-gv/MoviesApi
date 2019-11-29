import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { connect, useSelector, useDispatch } from 'react-redux';
import { actualizeInputValue } from '../../redux/actions/InputActions';

import MovieApi from '../../services/MovieApi';
import MovieResume from '../MovieResume';


const MoviesCarousel = ({ navigation }) => {
    const actualizeInput = useSelector(state => state.inputState.actualizeInput);
    const dispatch = useDispatch();
    const [moviesList, setMoviesList] = useState(false);
    const discoverMovies = 'sort_by=popularity.desc';


    const fetchMovies = async (discoverMovies) => {
        const movies = await MovieApi.recieveMovies({ discover: discoverMovies, search: actualizeInput, find: '' });
        // console.log("TCL: fetchMovies -> movies", movies)

        setMoviesList(movies.data.results);
    }

    useEffect(() => {
        fetchMovies(discoverMovies);
        // console.log("TCL: HomeScreen -> fetchMovies")
    }, [actualizeInput]);
    return (
        <View style={styles.moviesGrid}>
            {moviesList && moviesList.map(singleMovie => { return <MovieResume key={singleMovie.id.toString()} movie={singleMovie} navigation={navigation} /> })}
        </View>
    );
}
const styles = StyleSheet.create({
    moviesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: '#111111',
        paddingTop: 2
    },
});

export default MoviesCarousel;