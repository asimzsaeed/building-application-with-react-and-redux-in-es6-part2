/**
 * Created by asimz on 20/06/2016.
 */
import React, {PropTypes}  from 'react';
import {Link, IndexLink} from 'react-router';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"> <IndexLink to="/" activeClassName="active">Home</IndexLink> </li>
                        <li> <Link to="/about" activeClassName="active">About</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
