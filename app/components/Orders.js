import React from "react";
import { connect } from "react-redux";
import { fetchSelected } from "../redux/selectedFriends";
import { Link } from "react-router-dom";

export class Orders extends React.Component {

  componentDidMount() {
    this.props.fetchSelected();
  }


  render() {

      const friends = this.props.selectedFriend
    return (
      <div className="container">
        {friends.map((friend) => {
          return (
            <div className="user" key={friend.id}>
              <Link to={`/users/${friend.id}`} key={friend.id}>
                <div key={friend.id}>
                  <h1 className="name">{friend.name}</h1>
                </div>
              </Link>
              <button
                onClick={() => this.props.removedUser(friend.id)}
                type="submit"
              >
                Remove
              </button>
            </div>
          );
        })}
        <Link to="/buyers">Buyer</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students,
    selectedFriend: state.selectedFriend,
    chosen: state.chosen
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchSelected: () => dispatch(fetchSelected()),
  };
};

export default connect(mapStateToProps, mapDispatch)(Orders);
