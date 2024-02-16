import { ADD_TO_FAVS, REMOVE_FROM_FAVS } from "../actions";

const initialState = {
  list: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.payload) {
    case ADD_TO_FAVS:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_FAVS:
      return {
        list: [
          ...state.list.slice(0, action.payload),
          ...state.list.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};
export default favouritesReducer;
