import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import Order from './Order.jsx';
import {Orders} from '../../api/Orders.js'

export class OrderList extends Component {
    renderOrders() {
            return this
                .props
                .ordersdocs
                .map((ordersdocs) => (<Order key={ordersdocs._id} id={ordersdocs._id} ordersdocs={ordersdocs}/>));
    }
    render() {
        return (
            <div className="container">
                <table className="table table-striped table-hover ">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>First Name</th>
                            <th>Id order</th>
                            <th>Type Order</th>
                            <th>Customer</th>
                            <th>Provider</th>
                            <th>Date of rder execution</th>
                            <th>Status</th>
                            <th>Edit button</th>
                        </tr>
                    </thead>

                    {this.renderOrders()}

                </table>

            </div>
        );
    }
}

OrderList.propTypes = {
    ordersdocs: React.PropTypes.array
};

export default OrderListContainer = createContainer(() => {
    const subscription = Meteor.subscribe('orders');
    const ordersdocs = Orders
        .find()
        .fetch();
    return {ordersdocs};
}, OrderList);