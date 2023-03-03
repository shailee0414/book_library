import React from "react";

import "../css/TrendingSubjects.css";

import { Search } from "./SearchBar";

const TrendingSubjects = ({ data, onClick, route }) => {
  return (
    <div id="trendingSub">
      <h3>Trending Subjects</h3>
      <Search />
      <p>Please click Titles..</p>
      <div>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={(event) => {
                onClick(event, item);
              }}
            >
              <a href={route}>{item.title}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingSubjects;
