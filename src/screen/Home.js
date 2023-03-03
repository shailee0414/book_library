import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import { fetchBook, fetchSearchBook } from "../redux/action";
import { SearchBar } from "../components/SearchBar";
import TrendingSubjects from "../components/TrendingSubjects";
import Subjects from "../components/Subjects";
import SearchBooks from "../components/SearchBooks";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.book?.bookArr);
  const searchBook = useSelector((state) => state?.search?.searchArr);
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [offset, setOffset] = useState();
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [subject, setSubject] = useState();
  const [prev, setPrev] = useState();
  const [nxt, setNxt] = useState();

  useEffect(() => {
    dispatch(fetchBook());
    setNext(10);
    setPrevious(0);
  }, [dispatch]);

  const fetchTitleAndAuthor = useCallback(() => {
    if (text) {
      dispatch(fetchSearchBook(text, offset));
    }
  }, [dispatch, offset, text]);

  useEffect(() => {
    fetchTitleAndAuthor();
  }, [fetchTitleAndAuthor]);

  const handleEvent = (e) => {
    setTitle(null);
    return;
  };
  const handleSubmit = (e) => {
    setTitle(text);
    navigate("/subjects");
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", handleEvent);
    return () => window.removeEventListener("popstate", handleEvent);
  }, []);

  const onChangeText = (text) => {
    setText(text);
  };

  const debouncedChangeHandler = useMemo(() => debounce(onChangeText, 300), []);

  
  const onClickTrendingSubjects = (event, item) => {
    event.preventDefault();
    setPrev(0);
    setNxt(10);
    setTitle(item.title);
    setSubject(item);
    navigate("/subjects", { state: { item } });
  };

  const prevClickInSubject = () => {
    setPrev(prev >= 10 ? prev - 10 : 0);
    setNxt(nxt >= 20 ? nxt - 10 : 10);
  };
  const nextClickInSubject = () => {
    setPrev(prev + 10);
    setNxt(nxt + 10);
  };

  const onPrevClick = () => {
    setPrevious(previous >= 10 ? previous - 10 : 0);
    setNext(next >= 20 ? next - 10 : 10);
  };

  const onNextClick = () => {
    setOffset(offset + 10);
    setPrevious(previous + 10);
    setNext(next + 10);
  };

  const titleOrSearchbar = () => {
    if (title) {
      return <h2 id="title">{title}</h2>;
    }
    return (
      <SearchBar
        onChangeText={debouncedChangeHandler}
        text={text}
        onClick={handleSubmit}
        onKeyPress={handleKeypress}
      />
    );
  };

  return (
    <div id="home">
      <div id="trendingContainer">
        <TrendingSubjects
          data={data.slice(0, 12)}
          onClick={onClickTrendingSubjects}
          route="/subjects"
        />
      </div>
      <div id="tableContainer">
        <div id="bar_title">{titleOrSearchbar()}</div>
        <div id="tableList">
          <SearchBooks
            data={text ? searchBook : []}
            onNextClick={onNextClick}
            onPrevClick={onPrevClick}
            next={next}
            previous={previous}
          />
          <Subjects
            sub={subject}
            previous={prev}
            next={nxt}
            onPrevClick={prevClickInSubject}
            onNextClick={nextClickInSubject}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;