import React from "react";
import { connect } from "react-redux";
import { fetchSingle } from "../redux/buyer";
import { fetchSelected, removeAllFromSelectedFriends } from "../redux/selectedFriends";
import { createOrder } from "../redux/ordersStore";
import { Link } from "react-router-dom";

export class Buyer extends React.Component {

  // componentDidMount() {
  //   this.props.fetchSingle(1);
  // }
  componentDidMount() {
    this.props.fetchSelected();
  }

  getRandomInt(length) {
    return Math.floor(Math.random() * length);
  }

  selectBuyer(number){
    // console.log("Number1", this.getRandomInt(number))
    const buyer = ((this.getRandomInt(number)) + 1)
    console.log("Number", buyer)
    this.props.fetchSingle(buyer);
  }

  pay(){
    console.log("PAID")
    const price = (this.props.selectedFriend.length) * 5
    const order = {
      buyer: this.props.buyer.name,
      number: this.props.selectedFriend.length,
      price: price,
      friendId: this.props.buyer.friendId
    }
    this.props.createOrder(order)
    this.props.emptySelectedFriends(this.props.selectedFriend)
  }

  render() {
    const price = (this.props.selectedFriend.length) * 5
    return (
      <div className="container">
        <div>Price: ${price}  </div>
        <div>{this.props.buyer.name}</div>
              <button
              type="submit"
              className= "x-button"
               onClick={() => {this.selectBuyer(this.props.selectedFriend.length)}}
              >
                SELECT
              </button>
              <button
              type="submit"
              className= "x-button"
               onClick={() => {this.pay()}}
              >
                Pay
              </button>
      </div>
          );
        }
}

const mapStateToProps = (state) => {
  return {
    selectedFriend: state.selectedFriend,
    buyer: state.buyer,
    chosen: state.chosen
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchSelected: () => dispatch(fetchSelected()),
    fetchSingle: (id) => dispatch(fetchSingle(id)),
    createOrder: (order) => dispatch(createOrder(order, history)),
    emptySelectedFriends: (selectedFriends) => dispatch(removeAllFromSelectedFriends(selectedFriends))
  };
};

export default connect(mapStateToProps, mapDispatch)(Buyer);
