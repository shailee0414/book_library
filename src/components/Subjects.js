import React from "react";

import "../css/Subjects.css";

const Subjects = ({ sub, previous, next, onPrevClick, onNextClick }) => {
  if (sub) {
    return (
      <div id="subjects">
        <div>
          <table className="ui table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Subjects</th>
                <th>Author</th>
                <th>Edition Count</th>
                <th>First Publish Year</th>
              </tr>
            </thead>
            <tbody>
              {sub?.subject?.slice(previous, next)?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td>{sub?.authors[0]?.name}</td>
                    <td>{sub?.edition_count}</td>
                    <td>{sub?.first_publish_year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div id="buttonContainer">
          <button
            disabled={!previous}
            className="ui left labeled icon   primary basic button"
            onClick={onPrevClick}
          >
            <i className="left angle left icon"></i>
            Previous
          </button>
          <button
            disabled={next >= sub.subject.length}
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

export default Subjects;
