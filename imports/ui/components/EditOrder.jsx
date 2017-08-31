import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';

import {Orders} from '../../api/Orders.js'
Meteor.subscribe('orders');
export default class EditOrder extends Component {
    constructor(props) {
        super(props);
        orderIDForSearch = Session.get("orderID");
        orderDOC = Orders.findOne({_id: orderIDForSearch});
        if (orderDOC) {
            var options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            };
            orderforEditForm = orderDOC
                .date_order_execution
                .toLocaleString("ru", options);
            this.state = {
                emailValue: orderDOC.email,
                customerValue: orderDOC.customer,
                firstNameValue: orderDOC.first_name,
                secondNameValue: orderDOC.second_name,
                phoneNumberValue: orderDOC.phone_number,
                productValue: orderDOC.product,
                providerValue: orderDOC.provider,
                orderTypeValue: orderDOC.order_type,
                dateOfExecutionValue: orderforEditForm,
                idOrderValue: orderDOC.id_order,
                commentValue: orderDOC.comment
            }
        }

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
        let inputCustomer = this.state.customerValue;
        let currentEmail = this.state.emailValue;

        let inputFirstName = this.state.firstNameValue;
        let inputSecondName = this.state.secondNameValue;
        let inputPhoneNumber = this.state.phoneNumberValue;

        let inputProduct = this.state.productValue;
        let inputProvider = this.state.providerValue;
        let inputTypeOrder = this.state.orderTypeValue;
        let datainput = document.getElementById("inputDataOrderExecution");
        //let inputDataOfExecution = this.state.inputDataOfExecution;
        let inputCommentField = this.state.commentValue;

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
        Orders.update(Session.get("orderID"), {
            $set: {
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
            }
        })

        FlowRouter.go("/");
    }

    updateEmailField(evt) {
        this.setState({emailValue: evt.target.value});
    }
    updateCustomerField(evt) {
        this.setState({customerValue: evt.target.value});
    }
    updateFirstName(evt) {
        this.setState({firstNameValue: evt.target.value});
    }
    updateSecondName(evt) {
        this.setState({secondNameValue: evt.target.value});
    }
    updatePhoneNumber(evt) {
        this.setState({phoneNumberValue: evt.target.value});
    }
    updateProduct(evt) {
        this.setState({productValue: evt.target.value});
    }

    updateProviderField(evt) {
        this.setState({providerValue: evt.target.value});
    }
    updateTypeOrder(evt) {
        this.setState({orderTypeValue: evt.target.value});
    }
    updateIDOrder(evt) {
        this.setState({idOrderValue: evt.target.value});
    }
    updateDataOfExecution(evt) {
        this.setState({dateOfExecutionValue: evt.target.value});
    }
    updateCommentField(evt) {
        this.setState({commentValue: evt.target.value});
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
                <h1>Edit order</h1>
                <div className="well">
                    <form className="form-horizontal" onSubmit={this.handleClick}>
                        <fieldset>
                            <legend>Customer Information</legend>
                            <div className="form-group label-floating">
                                <label className="col-md-2 control-label" htmlFor="inputEmail">Email</label>

                                <div className="col-md-10">
                                    <input
                                        defaultValue={this.state.emailValue}
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
                                        defaultValue={this.state.customerValue}
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
                                        defaultValue={this.state.firstNameValue}
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
                                        defaultValue={this.state.secondNameValue}
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
                                        defaultValue={this.state.phoneNumberValue}
                                        type="number"
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
                                        defaultValue={this.state.productValue}
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
                                        defaultValue={this.state.providerValue}
                                        type="text"
                                        className="form-control"
                                        id="inputProvider"
                                        onChange={this.updateProviderField}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-md-2 control-label" htmlFor="select111">Select</label>

                                <div className="col-md-10">
                                    <select
                                        id="select111"
                                        defaultValue={this.state.orderTypeValue}
                                        className="form-control"
                                        onChange={this.updateTypeOrder}>
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
                                        defaultValue={this.state.dateOfExecutionValue}
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
                                        defaultValue={this.state.idOrderValue}
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
                                        defaultValue={this.state.commentValue}
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