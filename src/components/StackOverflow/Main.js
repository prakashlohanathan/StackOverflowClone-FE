import React from "react";
import FilterListIcon from '@mui/icons-material/FilterList';
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
import { Link } from "react-router-dom";

function Main({ questions }) {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link to="/add-question">
            <button className="mainbar-btn">Ask Question</button>
          </Link>
        </div>
        <div className="main-desc">
          <p>{questions?.length}
            questions</p>
          <div className="main-filter">
            <div className="main-tabs">
              <div className="main-tab">
                <Link to="/stackoverflow">Newest</Link>
              </div>
              <div className="main-tab">
                <Link to="/stackoverflow">Active</Link>
              </div>
              <div className="main-tab">
                <Link to="/stackoverflow">More</Link>
              </div>
            </div>
            <div className="main-filter-item">
              <FilterListIcon />
              <p className="main-filter-item-data">Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">

          {<div className="questions">
            {questions.map((_id, index) => (
              <div key={index} className="question">
                <AllQuestions question={_id} />
              </div>
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Main;


