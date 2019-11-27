import API from './API';

const BEER_API_BASE = 'https://api.punkapi.com/v2/beers/';

const MOVIE_API_BASE = 'https://api.themoviedb.org/3/';
const MOVIE_API_KEY = '?api_key=ddcc44e05558682d21600bc8a34d1314';
// https://developers.themoviedb.org/3/discover/movie-discover

class BeerApi {
  static urlParamsMap = {
    searchString: 'beer_name',
    date: 'brewed_before'
  }

  static _parseBeer(apiBeer) {
    const firstBrewed = apiBeer.first_brewed.replace('/', ' - ');
    return {
      ...apiBeer,
      id: apiBeer.id,
      title: apiBeer.name,
      tagline: apiBeer.tagline,
      date: firstBrewed
    }
  }

  static async searchBeers({ searchString, date, page, perPage }) {
    const httpApi = new API(BEER_API_BASE);
    // console.log("TCL: BeerApi -> searchBeers -> date", date)
    // console.log("TCL: BeerApi -> searchBeers -> searchString", searchString)
    let beers;
    if (searchString) {
      beers = await httpApi.get(
        '',
        {
          page,
          beer_name: searchString,
          brewed_before: `01-${date}`,
          per_page: perPage
        });
    }
    else {
      beers = await httpApi.get(
        '',
        {
          page,
          brewed_before: `01-${date}`,
          per_page: perPage
        });
    }

    return beers.map(BeerApi._parseBeer);
  }

  static async getRandomBeer() {
    const httpApi = new API(BEER_API_BASE);
    const randomBeers = await httpApi.get('random');
    return BeerApi._parseBeer(randomBeers[0]);
  }
}

class MovieApi {
  static async recieveTopMovies() {
    const httpApi = new API(MOVIE_API_BASE, MOVIE_API_KEY);
    let movieList = await httpApi.get('discover/movie?sort_by=vote_average.desc');
    console.log("TCL: MovieApi -> recieveTopMovies -> movieList", movieList)
    return movieList;
  }
}

export default MovieApi;

