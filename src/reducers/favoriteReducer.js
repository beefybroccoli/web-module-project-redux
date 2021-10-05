import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      console.log("case ADD_TO_FAVORITE, action = ", action);
      const favorite_newArray = [...state.favorites, action.payload];
      console.log("favorite_newArray = ", favorite_newArray);
      return { ...state, favorites: favorite_newArray };

    case REMOVE_FROM_FAVORITE:
      console.log("case REMOVE_FROM_FAVORITE, action = ", action);
      const filtered_newArray = state.favorites.filter((each) => {
        return each.id !== action.payload;
      });
      console.log("filtered_newArray = ", filtered_newArray);
      return { ...state, favorites: filtered_newArray };

    default:
      return state;
  }
};

export default favoriteReducer;
