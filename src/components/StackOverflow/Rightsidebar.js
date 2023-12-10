import React from 'react'
import { Link } from 'react-router-dom';
import './css/Rightsidebar.css';

function Rightsidebar() {
    return (

        <div id="sidebar" role="complementary" aria-label="sidebar">
            <div id="hot-network-questions" className="module tex2jax_ignore">
                <h4>
                    <Link to="/stackoverflow" className="js-gps-track s-link s-link__inherit" data-gps-track="posts_hot_network.click({ item_type:1, location:9 })">
                        Hot Network Questions
                    </Link>
                </h4>
                <ul>
                    <li>
                        <div className="favicon favicon-english" title="English Language &amp; Usage Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:97 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Prepositions in Relative Clauses: Placement Rules and Exceptions (during which)
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-math" title="Mathematics Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:69 }); posts_hot_network.click({ item_type:2, location:9 })">
                            u-substitution shows 0=1
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-cooking" title="Seasoned Advice"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:49 }); posts_hot_network.click({ item_type:2, location:9 })">
                            How can I assure even heat distribution in a glass bundt pan with a closed tube?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-history" title="History Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:324 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Are these Polish WWI or WW2 uniforms? And any idea on the shorter gentleman's military decoration (cross?) on left shoulder?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-softwareengineering" title="Software Engineering Stack Exchange"></div>
                        <Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:131 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Why and how to write clear code comments and when will documentations be needed beyond code commenting?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-philosophy" title="Philosophy Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:265 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Is free will even experienced? If not, can this be evidence for epiphenomenalism?
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-pets" title="Pets Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:518 }); posts_hot_network.click({ item_type:2, location:9 })">
                            Bovine colostrum for infant puppy
                        </Link>

                    </li>
                    <li>
                        <div className="favicon favicon-codereview" title="Code Review Stack Exchange"></div><Link to="/stackoverflow" className="js-gps-track question-hyperlink mb0" data-gps-track="site.switch({ item_type:9, target_site:196 }); posts_hot_network.click({ item_type:2, location:9 })">
                            O(nlogn) Lexicographically minimal rotation code but tle on this particular case
                        </Link>

                    </li>
                                                                               
                </ul>
            </div>
        </div>

    );
}

export default Rightsidebar;