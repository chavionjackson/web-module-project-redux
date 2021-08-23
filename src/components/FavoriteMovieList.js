import React from "react";
import { connect } from "react-redux";
import { removeFavorites } from "../actions/favActions";
import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const favorites = props.favorites;

  const deleteFav = (id) => {
      props.removeFavorites(id)
  }

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span onClick={() => deleteFav(movie.id)} className="material-icons">remove_circle</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favs.favorites,
  };
};

export default connect(mapStateToProps, { removeFavorites })(FavoriteMovieList);
