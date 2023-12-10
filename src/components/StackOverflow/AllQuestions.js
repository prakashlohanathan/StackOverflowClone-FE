import React from 'react';
import './css/AllQuestions.css';
import { Link } from "react-router-dom"; 

function AllQuestions({ question }) {


    return (

        <div id="questions" className=" flush-left">
            <div id="question-summary-77061183"  className="s-post-summary    js-post-summary questions-box" data-post-id="77061183" data-post-type-id="1">
                <div className="s-post-summary--stats js-post-summary-stats">
                    <div className="s-post-summary--stats-item s-post-summary--stats-item__emphasized" title="Score of 0">
                        <span className="s-post-summary--stats-item-number">0</span>
                        <span className="s-post-summary--stats-item-unit">votes</span>
                    </div>
                    <div className="s-post-summary--stats-item  " title="0 answers">
                        <span className="s-post-summary--stats-item-number">0</span>
                        <span className="s-post-summary--stats-item-unit">answers</span>
                    </div>
                    <div className="s-post-summary--stats-item " title="3 views">
                        <span className="s-post-summary--stats-item-number">3</span>
                        <span className="s-post-summary--stats-item-unit">views</span>
                    </div>
                </div>
                <div className="s-post-summary--content questions-data-box">
                    <h3 className="s-post-summary--content-title">
                        <Link to="/stackoverflow" className="s-link">{question?.title}</Link>
                    </h3>
                    <div className=" questions-body-data s-post-summary--content-excerpt">
                        {question.body}
                    </div>
                    <div className="s-post-summary--meta question-about">
                        <div className="questions-tags">

                            <ul className=" "><li className="">
                            React.js
                            </li><li className="">
                            Node.js</li></ul>
                        </div>
                        <div className=" question-user-data s-user-card s-user-card__minimal" aria-live="polite">
                         <div className="s-user-card--info">
                                <div className="s-user-card--link d-flex gs4">
                                    <Link to="/stackoverflow" className="flex--item">{question.user}</Link>
                                </div>
                                
                            </div>
                            <time className="s-user-card--time"><span>1</span> asked  <span title="2023-09-07 16:00:45Z" className="relativetime">56 secs ago</span></time>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllQuestions;