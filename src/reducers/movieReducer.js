import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  console.log("action = ", action);
  switch (action.type) {
    case DELETE_MOVIE:
      console.log("case DELETE_MOVIE, action = ", action);
      return {
        ...state,
        movies: state.movies.filter((eachMovie) => {
          return action.payload.id !== eachMovie.id;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
