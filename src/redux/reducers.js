import { combineReducers } from "redux";

const bookReducer = (state = { bookArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_BOOK":
      return { ...state, bookArr: [...state?.bookArr, ...action.payload] };
    default:
      return state;
  }
};
const searchBookReducer = (state= { searchArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_SEARCH_BOOK":
      return { ...state, searchArr: [...state?.searchArr, ...action.payload] };
    default:
      return state;
};
}

export default combineReducers({
  book: bookReducer,
  search: searchBookReducer,
});
