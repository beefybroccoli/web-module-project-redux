import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favoriteReducer from "./favoriteReducer.js";

const reducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
});

export default reducer;
