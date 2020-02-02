import React, { Component } from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <section className="notfound">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="content">
                                <h1>404</h1>
                                <h2>Not Found</h2>
                                <div className="content-button">
                                    <Link to ='/' className="btn btn-lg btn-warning ">Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default NotFound
