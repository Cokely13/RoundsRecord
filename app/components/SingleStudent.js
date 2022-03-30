import React from "react"
import {connect} from 'react-redux'
import {fetchSingleStudent} from "../redux/singleStudent"


class SingleStudent extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.props.loadSingleStudent(this.props.match.params.studentId)
  }

  render() {
    const student = this.props.SingleStudent
    const campus = student.campus

   return (
    <div id="single-student" className="column">
      <div id="single-student-detail" className="row">
        <div className="column mr1">
          <h1>{student.firstName}</h1>
          <h1>{student.lastName}</h1>
          <h1>{student.email}</h1>
          <h1>{student.gpa}</h1>
          {/* <h1>{!campus.name ? "no campus" : campus.name}</h1> */}
        </div>
          <img src={student.imageUrl} />
      </div>
    </div>
   )}}

const mapStateToProps = (state) => {
  return {
    SingleStudent: state.singleStudent,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    loadSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
