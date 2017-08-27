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
        currentDay = leftOneDay._d.toLocaleString("ru", options)
        console.log(currentDay);
        console.log(documentOrderDate);
        if (currentDay <= documentOrderDate) {
            console.log("true")
            return <span className="label label-primary">Confirm</span >
        } else { 
            console.log("false")
            return <span className="label label-warning">Expired</span>
    }
}
renderEditButton() {
    var options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    let dateOfOdred = this.props.ordersdocs.date_order_execution;
    let documentOrderDate = dateOfOdred.toLocaleString("ru", options);
    let today = moment();
    let leftOneDay = moment(today).add(-1, 'days');
    let leftTwoDay = moment(today).add(-2, 'days');
    let leftTreeDay = moment(today).add(-3, 'days');

    if (documentOrderDate == leftOneDay._d.toLocaleString("ru", options)) {
        return <a href="" className="btn btn-primary">Edit</a>
    } else if (documentOrderDate == leftTwoDay._d.toLocaleString("ru", options)) {
        return <a href="" className="btn btn-primary">Edit</a>
    } else if (documentOrderDate == leftTreeDay._d.toLocaleString("ru", options)) {
        return <a href="" className="btn btn-primary">Edit</a>
    }
    return <input
        type="button"
        className="btn btn-primary"
        value="Submit"
        id="submitbtn"
        onClick={this.clickEditButton}/>
}
clickEditButton() {
    //console.log(this)
    Session.set("orderID", this.props.ordersdocs._id);
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