import API from './API';

const MOVIE_API_BASE = 'https://api.themoviedb.org/3/';
const MOVIE_API_KEY = '?api_key=ddcc44e05558682d21600bc8a34d1314';
// https://developers.themoviedb.org/3/discover/movie-discover

// https://api.themoviedb.org/3/discover/movie?api_key=ddcc44e05558682d21600bc8a34d1314&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1
// https://api.themoviedb.org/3/search/movie?api_key=ddcc44e05558682d21600bc8a34d1314&language=en-US&query=fight&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/550?api_key=ddcc44e05558682d21600bc8a34d1314&language=en-US


class MovieApi {
  static async recieveMovies({ discover, search, find }) {
    const httpApi = new API(MOVIE_API_BASE, MOVIE_API_KEY);
    const movieList = await httpApi.get({ discover, search, find});
    return movieList;
  }

  static async getGenres(){
    const httpApi = new API(MOVIE_API_BASE, MOVIE_API_KEY);
    const movieGenres = await httpApi.getGenres();
    return movieGenres;
  }
}

export default MovieApi;

