import React from 'react'
import PortfolioItem from "../components/PortfolioItem";
import Proj1 from '../assets/Proj1.jpg';
import Proj2 from '../assets/Proj2.jpg';
import Proj3 from '../assets/Proj3.jpg';
import Proj4 from '../assets/Proj4.jpg';
import Proj5 from '../assets/Proj5.jpg';
import Proj6 from '../assets/Proj6.jpg';

import "../styles/Portfolio.css";





function Portfolio() {
  return (
    <div className="portfolio">
      <h1> My web-dev Portfolio</h1>
      <div className='portfolioList'>
        <PortfolioItem name="Walk With Me" image={Proj1} url="https://github.com/Lferg98/Walk-with-me" />
        <PortfolioItem name="Password Generator" image={Proj2} url="https://github.com/Lferg98/password-generator" />
        <PortfolioItem name="HTML/CSS Portfolio" image={Proj3} url="https://github.com/Lferg98/web-portfolio" />
        <PortfolioItem name="JavaScript Code Quiz" image={Proj4} url="https://github.com/Lferg98/C4-Code-Quiz" />
        <PortfolioItem name="Employee Tracker" image={Proj5} url="https://github.com/Lferg98/employee-tracker"/>
        <PortfolioItem name="Work Day Schedular" image={Proj6} url="https://github.com/Lferg98/Day-Scheduler"/>

      </div>
    </div>
  );
}   

export default Portfolio
   
