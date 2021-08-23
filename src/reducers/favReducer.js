import { ADD_FAV, REMOVE_FAV, TOGGLE_FAV } from "../actions/favActions";
// import movies from "../data";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAV:
      const newFav = {
        ...action.payload,
      };
      return {
        ...state,
        favorites: [...state.favorites, newFav],
      };
    case REMOVE_FAV:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default reducer;
