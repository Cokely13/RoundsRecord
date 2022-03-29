import React from "react";
import { connect } from "react-redux";
import { fetchStudents} from "../redux/students";
import { Link } from 'react-router-dom'


// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  componentDidMount(){
    this.props.fetchStudents();
  }
  render() {
    return  (
      <div>
      {this.props.students.map((student) => {
        return (
        <Link to ={`/students/${student.id}`}key={student.id}>
        <div key={student.id}>
          <div> Name: {student.firstName} </div>
          <div> Name: {student.lastName} </div>
          <img src={student.imageUrl} />
        </div>
        </Link>)
      })}
      </div>

    )
  }
}


const mapState = (state) => {
  return {
    students: state.students
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudents())
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
