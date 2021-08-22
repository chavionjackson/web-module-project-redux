import { ADD_FAV, TOGGLE_FAV } from "../actions/favActions";
// import movies from "../data";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case TOGGLE_FAV:
        return {
          ...state,
          displayFavorites: !state.displayFavorites
        }
      case ADD_FAV:
        const newFav = {
          ...action.payload,
        }
        return {
          ...state,
          favorites: [...state.favorites, newFav]
        }
        default:
            return state; 
    }
}

export default reducer