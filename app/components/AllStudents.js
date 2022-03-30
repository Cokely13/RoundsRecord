import React from "react";
import { connect } from "react-redux";
import { fetchStudents, deleteStudent} from "../redux/students";
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
          <div key={student.id}>
        <Link to ={`/students/${student.id}`}key={student.id}>
        <div key={student.id}>
          <div> Name: {student.firstName} </div>
          <div> Name: {student.lastName} </div>
          <img src={student.imageUrl} />
        </div>
        </Link>
        <form onSubmit={(ev) => ev.preventDefault()}>
        <button
        type="submit"
          className= "remove"
          onClick={() => this.props.deleteStudent(student.id)}
        >
          X
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
    students: state.students
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: (campus) => dispatch(deleteStudent(campus, history))
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
