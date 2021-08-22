import { combineReducers } from "redux";
import favReducer from "./favReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movs: movieReducer,
  favs: favReducer,
});

export default rootReducer;
