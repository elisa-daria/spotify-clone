export const ADD_TO_FAVS = "ADD_TO_FAVS";
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

export const AddToFavAction = (singleSong) => {
  return {
    type: ADD_TO_FAVS,
    payload: singleSong,
  };
};
export const RemoveFavAction = (index) => ({
  type: REMOVE_FROM_FAVS,
  payload: index,
});
export const AddToPlayerAction = (index) => ({
  type: ADD_TO_PLAYER,
  payload: index,
});
