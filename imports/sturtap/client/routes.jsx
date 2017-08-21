import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

import  MainLayout  from '../../ui/components/MainLayout.jsx'
import  NewOrder  from '../../ui/components/NewOrder.jsx'
import  OrderList  from '../../ui/components/OrderList.jsx'
 
FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(MainLayout, {})
  }
});

FlowRouter.route('/neworder', {
  name: 'new order',
  action() {
    mount(NewOrder, { })
  }
});

FlowRouter.route('/orderlist', {
  name: 'order list',
  action() {
    mount(OrderList, { })
  }
});