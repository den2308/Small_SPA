import React, {Component} from 'react';
import {Session} from 'meteor/session';

Session.set("orderID", null)

export default class Order extends Component {
    renderStatus() {
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        let dateOfOdred = this.props.ordersdocs.date_order_execution;
        let documentOrderDate = dateOfOdred.toLocaleString("ru", options);
        let today = moment();
        let leftOneDay = moment(today);
        currentDay = leftOneDay
            ._d
            .toLocaleString("ru", options)
        if (currentDay && documentOrderDate) {
            if (currentDay <= documentOrderDate) {
                return <span className="label label-primary">Confirm</span >
            } else {
                return <span className="label label-warning">Expired</span>
            }
        }

    }
    renderEditButton() {
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        let dateOfOdred = this.props.ordersdocs.date_order_execution;
        let someDate = moment(dateOfOdred).add(-3, 'days');
        let rightDate = someDate
            ._d
            .toLocaleString("ru", options);
        let today = new Date();
        let currentDay = today.toLocaleString("ru", options);
        if (currentDay && rightDate) {
            if (currentDay <= rightDate) {
                return <a
                    href=""
                    className="btn btn-primary"
                    id
                    ={this.props.ordersdocs._id}
                    onClick={this.clickEditButton}>Edit</a>
            }
        }

    }
    clickEditButton() {
        Session.set("orderID", null);
        Session.set("orderID", document.activeElement.id);
        FlowRouter.go("/editOrder");
    }
    renderCreateAt() {
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        docDate = this.props.ordersdocs.createdAt
        newDate = docDate.toLocaleString("ru", options);
        return newDate;
    }
    renderDateOrderExecution() {
        var options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        docDate = this.props.ordersdocs.date_order_execution;
        newDate = docDate.toLocaleString("ru", options);
        return newDate;
    }
    render() {
        return (
            <tbody>
                <tr>
                    <td>{this.renderCreateAt()}</td>
                    <td>{this.props.ordersdocs.first_name}</td>
                    <td>{this.props.ordersdocs.id_order}</td>
                    <td>{this.props.ordersdocs.order_type}</td>
                    <td>{this.props.ordersdocs.customer}</td>
                    <td>{this.props.ordersdocs.provider}</td>
                    <td>{this.renderDateOrderExecution()}</td>
                    <td>{this.renderStatus()}</td>
                    <td>{this.renderEditButton()}</td>
                </tr>
            </tbody>
        );
    }
}