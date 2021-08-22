import { TOGGLE_FAV } from "../actions/favActions";
import movies from "../data";

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
        default:
            return state; 
    }
}

export default reducer