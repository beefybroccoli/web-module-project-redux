export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addToFavorite = (movie) => {
  console.log("addToFavorite action, movie = ", movie);
  return { type: ADD_TO_FAVORITE, payload: movie };
};
export const removeFromFavorite = (id) => {
  console.log("removeFromFavorite action, id = ", id);
  return { type: REMOVE_FROM_FAVORITE, payload: id };
};
