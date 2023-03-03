import { combineReducers } from "redux";

const bookReducer = (state = { bookArr: [] }, action) => {
  switch (action.type) {
    case "FETCH_BOOK":
      return { ...state, bookArr: [...state?.bookArr, ...action.payload] };
    default:
      return state;
  }
};
const searchBookReducer = (
  state = { searchArr: [], isSearchLoading: false, isSearchFail: false },
  action
) => {
  switch (action.type) {
    case "FETCH_SEARCH_BOOK_SUCCESS":
      if (action?.payload?.length) {
        return {
          ...state,
          searchArr: [...action.payload],
          isSearchLoading: false,
        };
      } else {
        return {
          ...state,
          searchArr: [...state.searchArr],
          isSearchLoading: false,
        };
      }
    case "FETCH_SEARCH_BOOK_LOADING":
      return { ...state, isSearchLoading: true };
    case "FETCH_SEARCH_BOOK_FAIL":
      return { ...state, isSearchFail: true };
    default:
      return state;
  }
};

export default combineReducers({
  book: bookReducer,
  search: searchBookReducer,
});
