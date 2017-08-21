import React, {Component} from 'react';

export default class Order extends Component {
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
    renderDateOrderExecution(){
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
                    <td>status</td>
                    <td>edit bitton</td>
                </tr>
            </tbody>
        );
    }
}