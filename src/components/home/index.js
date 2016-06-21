/**
 * Created by asimz on 20/06/2016.
 */
import React  from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>Hello World</h1>
                <p>Building Application with React and Redux in ES6.</p>
                <Link to="about" className="btn btn-primary btn-lg">About Us</Link>
            </div>
        );
    }
}

