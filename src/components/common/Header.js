import React, { Component } from 'react';
import PropTypes from 'prop-types';

import activitiLogo from '../../images/activiti-logo.png';

class Header extends Component {
    render() {
        const { name, signoutHandler } = this.props;

        return (
        <div className="navbar navbar-fixed-top navbar-inverse" role="navigation" id="main-nav">
            <div className="fixed-container">
                <div className="navbar-header">
                    <a className="landing-logo">
                        <img src={activitiLogo} />
                    </a>
                </div>
                <div className="pull-right">
                    <div className="dropdown btn-group btn-group-sm">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"> {name}
                            <span className="glyphicon glyphicon-chevron-down" style={{fontSize: "10px"}} aria-hidden="true"></span>
                        </button>
                        <ul className="dropdown-menu pull-right">
                            <li><a onClick={signoutHandler}>Sign out</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
    }
}

Header.propTypes = {
    name : PropTypes.string,
    signoutHandler: PropTypes.func,
};

export default Header;