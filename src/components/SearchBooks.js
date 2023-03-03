import React from "react";

import "../css/SearchBooks.css";
const SearchBooks = ({ data, onPrevClick, onNextClick, next, previous }) => {

  if (data?.length) {
    return (
      <div id="search">
        <div>
          <table className="ui compact table">
            <thead>
              <tr>
                <th>Title and Sub Title</th>
                <th>Author</th>
                <th>Edition Count</th>
                <th>First Publish Year</th>
              </tr>
            </thead>
            <tbody>
              {data?.slice(previous, next).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item?.title_suggest}</td>
                    <td>{item?.author_name}</td>
                    <td>{item?.edition_count}</td>
                    <td>{item?.first_publish_year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div id="prevNextButton">
          <button
            disabled={!previous}
            className="ui left labeled icon   primary basic button"
            onClick={onPrevClick}
          >
            <i className="left angle left icon"></i>
            Previous
          </button>
          <button
            disabled={next === data.length}
            className="ui right labeled icon primary button"
            onClick={onNextClick}
          >
            <i className="right angle right icon"></i>Next
          </button>
        </div>
      </div>
    );
  }
};

export default SearchBooks;
