import React from "react"
import {connect} from 'react-redux'
import {fetchSingleStudent} from "../redux/singleStudent"
import Link from "react-router-dom/Link"


class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  componentDidMount () {
    this.props.loadSingleStudent(this.props.match.params.studentId)
    this.setState( {loading: false })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.singleStudent.firstName !== this.props.singleStudent.firstName || prevProps.singleStudent.lastName !== this.props.singleStudent.lastName || prevProps.singleStudent.email !== this.props.singleStudent.email) {
    this.props.loadSingleStudent(this.props.match.params.studentId)}
  }

  render() {
    const student = this.props.singleStudent
    const campus = student.campus || ""
    const { loading } = this.state
   return (
    <div className="single-student column">
      <div>{loading && <div>Loading</div>}</div>
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
