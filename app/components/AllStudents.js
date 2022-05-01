import React from "react";
import { connect } from "react-redux";
import { fetchStudents, deleteStudent} from "../redux/students";
import { createSelected } from "../redux/selectedFriends";
import { Link } from 'react-router-dom'


export class AllStudents extends React.Component {
  constructor() {
    super();
    this.state = {
    };

}
  componentDidMount(){
    this.props.fetchStudents()
  }

  handleSubmit(evt) {
    console.log("NAMEE", evt)
    // evt.preventDefault();
    // this.props.createSelected(evt);
    }

    handleCart(student){
      const select = {
        name: student
      }
      this.props.createSelected(select)
    }

  render() {
    return  (
      <div className="container">
      {this.props.students.map((student) => {
        return (
          <div className="student" key={student.id}>
        <Link to ={`/students/${student.id}`}key={student.id}>
        <div key={student.id}>
          <div className="nameLine"> Name: {student.name} </div>
          <img src={student.imageUrl} />
        </div>
        </Link>
        <form onSubmit={(ev) => ev.preventDefault()}>
          <div className= "remove">Select Friend</div>
        <button
        type="submit"
          className= "x-button"
          onClick={() => {this.handleCart(student.name)}}
        >
          X
        </button>
        </form>
          </div>
        )
      })}
      <Link to ="/orders">Order</Link>
      </div>

    )
  }
}


const mapState = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: (campus) => dispatch(deleteStudent(campus, history)),
    createSelected: (friend) => dispatch(createSelected(friend, history))
  };
};

export default connect(mapState, mapDispatch)(AllStudents);
