import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favorites";
import songsReducer from "../reducers/songs";

const mainReducer = combineReducers({
  favorites: favouritesReducer,
  songs: songsReducer,
});
const store = configureStore({
  reducer: mainReducer,
});
export default store;
