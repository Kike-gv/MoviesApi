import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import MovieApi from '../../services/MovieApi';
import MovieResume from '../MovieResume';


const MoviesCarousel = ({ navigation }) => {
    const [moviesList, setMoviesList] = useState(false);


    const fetchMovies = async () => {
        const movies = await MovieApi.recieveMovies({ discover: 'sort_by=popularity.desc', search: '', find: '' });
        // console.log("TCL: fetchMovies -> movies", movies)

        setMoviesList(movies.data.results);
    }

    useEffect(() => {
        fetchMovies();
        // console.log("TCL: HomeScreen -> fetchMovies")
    }, []);
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
        backgroundColor: '#383838',
        paddingTop: 2
    },
});

export default MoviesCarousel;