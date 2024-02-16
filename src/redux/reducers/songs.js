import { ADD_TO_PLAYER } from "../actions";

const initialState = {
  results: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
export default songsReducer;
