export const DELETE_MOVIE = "DELETE_MOVIE";

export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id) => {
  console.log("delete movie id ", id);
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (movie) => {
  console.log("add movie id ", JSON.stringify(movie));
  return { type: ADD_MOVIE, payload: movie };
};
