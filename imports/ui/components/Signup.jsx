import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        //this.state={inputfield: "no value"};
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.updateEmailField = this
            .updateEmailField
            .bind(this);
        this.updateUsernameField = this
            .updateUsernameField
            .bind(this);
        this.updatePasswordField = this
            .updatePasswordField
            .bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const username = this.state.inputUsername;
        const password = this.state.inputPassword;
        const email = this.state.inputEmail;
        var user = {
            email: email,
            username: username,
            password: password
        };

        Accounts.createUser(user);

        FlowRouter.go("/");
    }
    updateEmailField(evt) {
        this.setState({inputEmail: evt.target.value});
    }
    updateUsernameField(evt) {
        this.setState({inputUsername: evt.target.value});
    }
    updatePasswordField(evt) {
        this.setState({inputPassword: evt.target.value});
    }
    render() {
        return (
            <div className="sigup" id="loginform">
                <div className="well" id="wellLoginForms">
                    <div className="col-xs-12 col-sm-6 col-md-4" id="formLogin">
                        <h4 className="page-header">Sign Up</h4>
                        <form id="signup" className="signup" onSubmit={this.handleSubmit}>
                            <div className="form-group">

                                <input
                                    onChange={this.updateEmailField}
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Email"></input>

                            </div>
                            <div className="form-group">

                                <input
                                    onChange={this.updateUsernameField}
                                    type="username"
                                    name="username"
                                    className="form-control"
                                    placeholder="User Name"></input>
                            </div>
                            <div className="form-group">

                                <input
                                    onChange={this.updatePasswordField}
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"></input>
                            </div>

                            <div className="form-group">
                                <input type="submit" className="btn btn-raised btn-success" value="Sign Up"/>
                            </div>
                        </form>
                        <p>Already have an account?
                            <a href="/login">Log In</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
};