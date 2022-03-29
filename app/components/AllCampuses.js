import React from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../redux/campuses";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount(){
    this.props.fetchCampuses();
  }
  render() {
    return  (
      <div>
      {this.props.campuses.map((campus) => {
        return (<div key={campus.id}>
          <div> Name: {campus.name} </div>
          <img src={campus.imageUrl} />
                </div>)
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

const mapDispatch = (dispatch) => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses())
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
