export const fetchBook = () => async (dispatch) => {
  const res = await fetch("https://openlibrary.org/subjects/love.json?");
  if (res) {
    const response = await res.json();
    dispatch({ type: "FETCH_BOOK", payload: response?.works });
  }
};

export const fetchSearchBook = (text) => async (dispatch) => {
  dispatch({ type: "FETCH_SEARCH_BOOK_LOADING" });

  const res = await fetch(
    `https://openlibrary.org/search.json?q=${encodeURI(text)}&limit=40`,
    {
      method: "GET",
    }
  );
  if (res) {
    const response = await res.json();
    dispatch({ type: "FETCH_SEARCH_BOOK_SUCCESS", payload: response?.docs });
  } else {
    dispatch({ type: "FETCH_SEARCH_BOOK_FAIL", });
  }
};

export const fetchTitle = (title) => async (dispatch) => {
  dispatch({ type: "FETCH_TITLE", payload: title });
};
