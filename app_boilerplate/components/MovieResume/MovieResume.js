import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieResume = ({ movie, navigation }) => {
    let bgImage;

    movie.poster_path !== null ? bgImage = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path : bgImage = 'https://res.cloudinary.com/teepublic/image/private/s--kyqRFw-v--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1512255885/production/designs/2131419_1.jpg';

    return (
        <TouchableOpacity style={styles.movieResume} onPress={() => {
            // return favclick(beer);
            navigation.navigate('Detalle', movie);
        }
        }>
            <Image style={styles.movieResumeImage} source={{ uri: bgImage }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    movieResume: {
        width: '49%',
        marginBottom: 2,
    },
    movieResumeImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
});

export default MovieResume;