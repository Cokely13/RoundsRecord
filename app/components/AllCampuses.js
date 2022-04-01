import React from "react";
import { connect } from "react-redux";
import { deleteCampus, fetchCampuses } from "../redux/campuses";
import { Link } from 'react-router-dom'

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {


  componentDidMount(){
    this.props.fetchCampuses();
  }


  render() {
    return  (
      <div className="campus">
      {this.props.campuses.map((campus) => {
        return (
        <div className= "block" key={campus.id}>
        <Link to ={`/campuses/${campus.id}`}key={campus.id}>
        <div key={campus.id}>
          <div> Name: {campus.name} </div>
          <div> Address: {campus.address} </div>
          <div> Description: {campus.description} </div>
          <img src={campus.imageUrl} />
        </div>
        </Link>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <button
          type="submit"
            className= "remove"
            onClick={() => this.props.deleteCampus(campus.id)}
          >
           Delete Campus: X
          </button>
        </form>
        </div>
        )
      })}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    campuses: state.campuses
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    deleteCampus: (campus) => dispatch(deleteCampus(campus, history))
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
