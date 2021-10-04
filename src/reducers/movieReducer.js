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
      const newArray = state.movies.filter((eachMovie) => {
        return eachMovie.id !== parseInt(action.payload);
      });
      console.log("newArray = ", newArray);
      return {
        ...state,
        movies: newArray,
      };
    case ADD_MOVIE:
      console.log("case ADD_MOVIE, action = ", action);
      return { ...state, movies: [...state.movies, action.payload] };

    default:
      return state;
  }
};

export default reducer;
