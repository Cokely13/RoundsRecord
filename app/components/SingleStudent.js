import React from "react"
import {connect} from 'react-redux'
import {fetchSingleStudent} from "../redux/singleStudent"
import Link from "react-router-dom/Link"


class SingleStudent extends React.Component {
  componentDidMount () {
    this.props.loadSingleStudent(this.props.match.params.studentId)
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.singleStudent.name !== this.props.singleStudent.name){
  //   this.props.loadSingleStudent(this.props.match.params.studentId)}
  // }

  render() {
    const student = this.props.singleStudent
    const campus = student.campus || ""

   return (
    <div className="single-student column">
      <div className="single-student-detail row">
        <div className="column mr1">
          <h1>{student.firstName} {student.lastName}</h1>
          <h1>{student.email}</h1>
          <h1>GPA: {student.gpa}</h1>
          <h1>{campus.name ? <Link to={`/campuses/${campus.id}`}> {campus.name} </Link> : "No Assigned Campus"}</h1>
        </div>
          <img src={student.imageUrl} />
      </div>
    </div>
   )}}

const mapStateToProps = (state) => {
  return {
    singleStudent: state.singleStudent,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    loadSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
