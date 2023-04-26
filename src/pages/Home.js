import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from "@material-ui/icons/GitHub";
import MyFace from "../assets/MyFace.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Lachlan Ferguson</h2>
        <img src={MyFace} alt="pp pic" />

        <div className="prompt">
          <p>A web-development student with a passion for learning and creating. Studying the MERN stack at Monash University Coding Bootcamp.</p>
          
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
        <li className="item">
          <h2> Front-End</h2>
          <span>
            HTML, CSS, Git, JavaScript, Bootstrap, The DOM, API's, JQuery, JSON, AJAX, Bulma, NPM, Yarn
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            NodeJS, ExpressJS, ApolloSever, MySQL, MongoDB, Sequelize, Testing
          </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>
            JavaScript, TypeScript, HTML, CSS
          </span>
        </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;