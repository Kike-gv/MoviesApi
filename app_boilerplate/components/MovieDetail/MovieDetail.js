import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import MovieApi from '../../services/MovieApi';

const { width, height } = Dimensions.get('window');

const MovieDetail = ({ movie }) => {
    const [moviesGenres, setMoviesGenres] = useState([]);


    const fetchGenres = async () => {
        const genres = await MovieApi.getGenres();
        changeGenreCodeToWords(genres.data);
    }

    const changeGenreCodeToWords = (GenresCodes) => {
        const genreArray = [];
        movie.genre_ids.map(singleGenre => {
            GenresCodes.genres.forEach(element => {
                if (singleGenre === element.id) {
                    console.log("TCL: changeGenreCodeToWords -> element.name", element.name)
                    // setMoviesGenres(...moviesGenres, element.name);
                    genreArray.push(element.name);
                }
            });
        });
        console.log("TCL: changeGenreCodeToWords -> genreArray", genreArray)

        setMoviesGenres(genreArray);
    }

    useEffect(() => {
        fetchGenres();
    }, []);


    let bgImage;

    movie.poster_path !== null ? bgImage = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path : bgImage = 'https://res.cloudinary.com/teepublic/image/private/s--kyqRFw-v--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1512255885/production/designs/2131419_1.jpg';

    return (
        <View style={styles.movieDetail}>
            <Image style={styles.movieDetail_image} source={{ uri: bgImage }} />
            <Text style={styles.movieDetail_title}>{movie.title}</Text>
            <View style={styles.flexedSpaced}>
                <Text style={styles.movieDetail_subtitle}>Puntuación:</Text>
                <Text style={styles.movieDetail_subtitle}>{movie.vote_average}</Text>
            </View>
            <View style={styles.flexedSpaced}>
                <Text style={styles.movieDetail_subtitle}>Estreno:</Text>
                <Text style={styles.movieDetail_subtitle}>{movie.release_date}</Text>
            </View>
            <View style={styles.movieDetail_Genres}>
                {moviesGenres && moviesGenres.map(genre => { return <Text key={genre} style={styles.movieDetail_Genres_Individual}>{genre}</Text> })}
            </View>
            {/* {moviesGenres && moviesGenres.map(genre => { return <Text>{genre}</Text> })} */}
            <Text style={styles.movieDetail_overview}>{movie.overview}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flexedSpaced: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%'
    },
    movieDetail: {
        minHeight: height,
        backgroundColor: '#111111',
        padding: 16
    },
    movieDetail_image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    movieDetail_title: {
        fontSize: 24,
        color: 'white',
        marginBottom: 8,
    },
    movieDetail_subtitle: {
        fontSize: 18,
        color: 'white',
        marginBottom: 6,
    },
    movieDetail_Genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 11,
    },
    movieDetail_Genres_Individual: {
        marginLeft: 5,
        backgroundColor: 'rgba(255,255,255,0.6)',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom:5
    },
    movieDetail_overview: {
        fontSize: 16,
        color: '#aaaaaa',
        marginBottom: 8,
        marginTop: 2,
    }
});


export default MovieDetail;