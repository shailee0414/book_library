export const fetchBook = () => async (dispatch) => {
  const res = await fetch("http://openlibrary.org/subjects/love.json?");
  if (res) {
    const response = await res.json();
    dispatch({ type: "FETCH_BOOK", payload: response?.works });
  }
};

export const fetchSearchBook = (text, offset) => async (dispatch) => {
  const res = await fetch(
    `http://openlibrary.org/search.json?q=${encodeURI(text)}&limit=10&offset=${offset}`,
    {
      method: "GET",
    }
  );
  if (res) {
    const response = await res.json();
    console.log(
      `http://openlibrary.org/search.json?q=${encodeURI(text)}`,
      response.docs
    );
    dispatch({ type: "FETCH_SEARCH_BOOK", payload: response?.docs });
  }
};

export const fetchTitle = (title) => async (dispatch) => {
  dispatch({ type: "FETCH_TITLE", payload: title });
};
