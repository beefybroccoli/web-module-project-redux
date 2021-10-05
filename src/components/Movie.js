import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { deleteMovie } from "../actions/movieActions";
import { addToFavorite, removeFromFavorite } from "../actions/favoriteActions";
const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  //   const { dispatch } = props;
  const movie = props.movies.find((movie) => movie.id === Number(id));

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  movies
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movie.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                <span
                  className="m-2 btn btn-dark"
                  onClick={() => {
                    props.addToFavorite(movie);
                  }}
                >
                  Favorite
                </span>
                <span
                  className="m-2 btn btn-dark"
                  onClick={() => {
                    props.removeFromFavorite(movie.id);
                  }}
                >
                  Unfavorite
                </span>
                <span className="delete">
                  <input
                    type="button"
                    className="m-2 btn btn-danger"
                    value="Delete"
                    onClick={() => {
                      props.deleteMovie(id);
                      push("/movies");
                    }}
                  />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
  };
};

const mapDispatchToProps = { deleteMovie, addToFavorite, removeFromFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
