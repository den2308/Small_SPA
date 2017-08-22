import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

export default class Login extends Component {
    constructor(props) {
        super(props);
        //this.state={inputfield: "no value"};
        this.handleSubmit = this
            .handleSubmit
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

        Meteor.loginWithPassword(username, password, (error) => {
            if (error) {
                console.log(error.reason, 'warning');
            } else {

                FlowRouter.go("/");
            }
        });
    }
    updateUsernameField(evt) {
        this.setState({inputUsername: evt.target.value});
    }
    updatePasswordField(evt) {
        this.setState({inputPassword: evt.target.value});
    }

    render() {
        return (
            <div className="row" id="loginform">
                <div className="well" id="wellLoginForms">
                    <div className="col-xs-12 col-sm-6 col-md-4" id="formLogin">
                        <h4 className="page-header">Login</h4>
                        <form id="login" className="login" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    onChange={this.updateUsernameField}
                                    type="username"
                                    name="username"
                                    className="form-control"
                                    placeholder="User Name"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={this.updatePasswordField}
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"></input>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-success" value="Login"/>
                            </div>
                        </form>
                        <p>Don't have an account?
                            <a href="/signup">Sign Up</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
};