export const TOGGLE_FAV = "TOGGLE_FAV";
export const ADD_FAV = "ADD_FAV";

export const toggleFavorites = () => {
  return { type: TOGGLE_FAV };
};

export const addFavorites = (fav) => {
  return { type: ADD_FAV, payload: fav };
};
