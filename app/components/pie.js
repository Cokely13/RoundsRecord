import React from "react";
import ReactDOM from 'react-dom';
import { VictoryPie } from "victory";
import { fetchOrders } from '../redux/ordersStore';
import { connect } from "react-redux";

function Total (array){
  let price = 0
  for (let i = 0; i < array.length; i++) {
    price = price + array[i].price
  }
console.log("price", price)
return price
}

class Pie extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
    console.log('STATE', this.props.orders)
  }


  render() {
    return (
 <VictoryPie
 data= {this.props.orders.map((order) => {
  return ({x: order.buyer, y: order.price})})}
  />
    )
}}

const mapStateToProps = (state) => {
  return {
   orders: state.orders
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  };
};

export default connect(mapStateToProps, mapDispatch)(Pie)
