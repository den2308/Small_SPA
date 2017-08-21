import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import OrderList from './OrderList.jsx';

export default class MainLayout extends Component {
    render() {
        return (
            <div className="main_layout">
                <div className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target=".navbar-responsive-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="javascript:void(0)">Brand</a>
                        </div>
                        <div className="navbar-collapse collapse navbar-responsive-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="/neworder">neworder</a>
                                </li>
                                <li>
                                    <a href="/orderlist">orderlist</a>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-left">
                                <div className="form-group">
                                    <input type="text" className="form-control col-md-8" placeholder="Search"/>
                                </div>
                            </form>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="/">Link</a>
                                </li>
                                <li className="dropdown">
                                    <a href="" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="/">Action</a>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <OrderList/>
                <div id="footer">
                    <a href="/neworder">
                        <button
                            className="w3-button w3-xlarge w3-circle w3-red w3-card-4"
                            id="buttonPulse">+</button>
                    </a>
                </div>
            </div>
        );
    }
}
// export default createContainer(() => {  Meteor.subscribe('orders'); },
// MainLayout);