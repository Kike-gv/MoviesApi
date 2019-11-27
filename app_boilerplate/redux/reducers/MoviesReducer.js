const INITIAL_STATE = { actualizeMovies: ''};

const MovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ACTUALIZE_INPUT_VALUE': {
      return { actualizeMovies: action };
    }
    default: {
      return state
    }
  }
}

export default MovieReducer;