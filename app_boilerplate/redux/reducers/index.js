import { combineReducers } from 'redux';

import InputReducer from './InputReducer';
import MovieReducer from './MoviesReducer';

console.log('entro en Combine Reducers');
const reducers = combineReducers({
    //   dateState: setDateReducer,
    //   discoState: discoReducer
    inputState: InputReducer,
    moviesState: MovieReducer,
})

export default reducers;