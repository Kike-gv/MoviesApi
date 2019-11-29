import axios from 'axios';

class API {
  constructor(apiBaseURL, apiKeyURL) {
    this.apiBase = apiBaseURL;
    this.apiKey = apiKeyURL
  }

  // const MOVIE_API_BASE = 'https://api.themoviedb.org/3/';
  // const MOVIE_API_KEY = '?api_key=ddcc44e05558682d21600bc8a34d1314';
  // https://api.themoviedb.org/3/discover/movie?api_key=ddcc44e05558682d21600bc8a34d1314&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1
  // https://api.themoviedb.org/3/search/movie?api_key=ddcc44e05558682d21600bc8a34d1314&language=en-US&query=fight&page=1&include_adult=false
  // https://api.themoviedb.org/3/movie/550?api_key=ddcc44e05558682d21600bc8a34d1314&language=en-US

  async get({ discover, find, search }) {
    const LANGUAGE = '&language=es-ES';
    let previousHeader;
    let extendedProp;

    if (search !== '') { extendedProp = '&query=' + search + LANGUAGE; previousHeader = 'search/movie'; }

    else if (discover !== '') { extendedProp = '&' + discover + LANGUAGE; previousHeader = 'discover/movie'; }

    else if (find !== '') { extendedProp = '&' + find + LANGUAGE; previousHeader = 'movie/'; };

    const urlBuild = this.apiBase + previousHeader + this.apiKey + extendedProp;
    console.log("TCL: API -> get -> urlBuild", urlBuild)
    const result = await axios.get(urlBuild);
    if (result.status === 200) {
      // console.log("TCL: API -> get -> result", result)
      return result;
    }
  }

  async getGenres() {
    const LANGUAGE = '&language=es-ES';
    const previousHeader = 'genre/movie/list';
    const urlBuild = this.apiBase + previousHeader + this.apiKey + LANGUAGE;
    const result = await axios.get(urlBuild);
    if (result.status === 200) {
      // console.log("TCL: API -> get -> result", result)
      return result;
    }
  }
}

export default API;