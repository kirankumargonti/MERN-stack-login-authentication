import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaNodeJs, FaReact, FaGithub } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';

class Home extends Component {
  render() {
    return (
      <section id="banner" className="banner">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-left">
                <h1 className="text-capitalize">
                  Welcome to
                  <span className="text-uppercase"> mern </span>
                  stack Application
                </h1>
                <div className="buttons">
                  <Link
                    to="/login"
                    className="btn btn-lg btn-outline-none border-3 btn-login"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-lg btn-outline-none border-3 btn-register"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-right">
                <h1 className="text-capitalize">
                  <DiMongodb className="text-success" />
                  <img
                    src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                    alt="e"
                  />
                  <FaReact className="text-info" />
                  <FaNodeJs className="text-success" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
