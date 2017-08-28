import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

import {Orders} from '../../api/Orders.js'
Meteor.subscribe('orders');
export default class NewOrder extends Component {
    constructor(props) {
        super(props);
        //this.state={inputfield: "no value"};
        this.handleClick = this
            .handleClick
            .bind(this);

        this.updateEmailField = this
            .updateEmailField
            .bind(this);
        this.updateCustomerField = this
            .updateCustomerField
            .bind(this);
        this.updateFirstName = this
            .updateFirstName
            .bind(this);
        this.updateSecondName = this
            .updateSecondName
            .bind(this);
        this.updatePhoneNumber = this
            .updatePhoneNumber
            .bind(this);
        this.updateProduct = this
            .updateProduct
            .bind(this);
        this.updateProviderField = this
            .updateProviderField
            .bind(this);
        this.updateTypeOrder = this
            .updateTypeOrder
            .bind(this);
        this.updateIDOrder = this
            .updateIDOrder
            .bind(this);
        this.updateDataOfExecution = this
            .updateDataOfExecution
            .bind(this);
        this.updateCommentField = this
            .updateCommentField
            .bind(this);
    }

    handleClick() {
        let inputCustomer = this.state.inputCustomer;
        let currentEmail = this.state.inputEmail;

        let inputFirstName = this.state.inputFirstName;
        let inputSecondName = this.state.inputSecondName;
        let inputPhoneNumber = this.state.inputPhoneNumber;

        let inputProduct = this.state.inputProduct;
        let inputProvider = this.state.inputProvider;
        let inputTypeOrder = this.state.inputTypeOrder;
        let datainput = document.getElementById("inputDataOrderExecution");
        //let inputDataOfExecution = this.state.inputDataOfExecution;
        let inputCommentField = this.state.inputCommentField;

        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        docDate = new Date();
        newDate = docDate.toLocaleString("ru", options);
        let firstChar = inputTypeOrder.substring(0, 1);
        let secondChar = newDate.substring(8, 10);
        let thirdChar = newDate.substring(3, 5);
        let fourChar = newDate.substring(0, 2);
        let contsdocs = Orders
            .find()
            .count()
        curentPositionOfOrder = contsdocs + 1;
        odorederfield = firstChar + "-" + secondChar + thirdChar + fourChar + curentPositionOfOrder;
        let inputIDOrder = odorederfield;

        Orders.insert({
            email:currentEmail,
            createdAt: new Date(),
            id_order: inputIDOrder,
            customer: inputCustomer,
            first_name: inputFirstName,
            second_name: inputSecondName,
            phone_number: inputPhoneNumber,
            order_type: inputTypeOrder,
            product: inputProduct,
            provider: inputProvider,
            comment: inputCommentField,
            date_order_execution: datainput.value
        }, function (error, result) {
            if (error) {
                alert(error)
            }
        });
        FlowRouter.go("/");
    }

    updateEmailField(evt) {
        this.setState({inputEmail: evt.target.value});
    }
    updateCustomerField(evt) {
        this.setState({inputCustomer: evt.target.value});
    }
    updateFirstName(evt) {
        this.setState({inputFirstName: evt.target.value});
    }
    updateSecondName(evt) {
        this.setState({inputSecondName: evt.target.value});
    }
    updatePhoneNumber(evt) {
        this.setState({inputPhoneNumber: evt.target.value});
    }
    updateProduct(evt) {
        this.setState({inputProduct: evt.target.value});
    }

    updateProviderField(evt) {
        this.setState({inputProvider: evt.target.value});
    }
    updateTypeOrder(evt) {
        this.setState({inputTypeOrder: evt.target.value});
    }
    updateIDOrder(evt) {
        this.setState({inputIDOrder: evt.target.value});
    }
    updateDataOfExecution(evt) {
        console.log(evt.target.value)
        this.setState({inputDataOfExecution: evt.target.value});
    }
    updateCommentField(evt) {
        this.setState({inputCommentField: evt.target.value});
    }
    datapickerfocus(evt) {
        $('#inputDataOrderExecution').bootstrapMaterialDatePicker({weekStart: 0, time: false});
    }
    cancelButton() {
        FlowRouter.go("/");
    }
    render() {
        return (
            <div className="container">
                <h1>Add new order</h1>
                <div className="well">
                    <form className="form-horizontal" onSubmit={this.handleClick}>
                        <fieldset>
                            <legend>Customer Information</legend>
                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputEmail">Email</label>

                                <div className="col-md-10">
                                    <input
                                        onChange={this.updateEmailField}
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="Email"/>
                                </div>
                            </div>

                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputCustomer">Customer</label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCustomer"
                                        onChange={this.updateCustomerField}/>
                                </div>
                            </div>
                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputFirsName">First Name</label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputFirsName"
                                        onChange={this.updateFirstName}/>
                                </div>
                            </div>
                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputSecondName">Second Name</label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputSecondName"
                                        onChange={this.updateSecondName}/>
                                </div>
                            </div>
                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputPhoneNumber">Phone Number</label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputPhoneNumber"
                                        onChange={this.updatePhoneNumber}/>
                                </div>
                            </div>
                            <legend>Order Information</legend>

                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputProduct">Product</label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputProduct"
                                        onChange={this.updateProduct}/>
                                </div>
                            </div>
                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputProvider">Provider</label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputProvider"
                                        onChange={this.updateProviderField}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-2 control-label" htmlFor="select111">Select</label>

                                <div className="col-md-10">
                                    <select id="select111" className="form-control" onChange={this.updateTypeOrder}>
                                        <option>None</option>
                                        <option>Wholesale</option>
                                        <option>Retail</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2 control-label" htmlFor="inputDataOrderExecution">Date of order execution</label>
                                <div className="col-md-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputDataOrderExecution"
                                        onFocus={this.datapickerfocus}
                                        onInput={this.updateDataOfExecution}/>
                                </div>
                            </div>
                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="disabledInputIDOreder">ID oreder</label>
                                <div className="col-md-10">
                                    <input
                                        disabled="disabled"
                                        type="text"
                                        className="form-control"
                                        id="disabledInputIDOreder"
                                        onChange={this.updateIDOrder}/>
                                </div>
                            </div>

                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="textArea">Comment</label>
                                <div className="col-md-10">
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        id="textArea"
                                        onChange={this.updateCommentField}></textarea>
                                    <span className="help-block">Leave comment about this order</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-10 col-md-offset-2">

                                    <input
                                        type="button"
                                        className="btn btn-default"
                                        value="Cancel"
                                        id="cancelbtn"
                                        onClick={this.cancelButton}/>
                                    <input
                                        type="button"
                                        className="btn btn-primary"
                                        value="Submit"
                                        id="submitbtn"
                                        onClick={this.handleClick}/>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}