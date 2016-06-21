/**
 * Created by asimz on 20/06/2016.
 */
import React, {PropTypes} from 'react';
import Navbar from './components/shared/navbar';

class AppLayout extends React.Component {
    render(){
        return (
            <div className="container-fluid">
                <Navbar/>
                {this.props.children}
            </div>
        );
    }
}

AppLayout.PropTypes = {
    children: PropTypes.object.isRequired
};


export default AppLayout;
