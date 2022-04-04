import React from "react"
import {connect} from 'react-redux'
import {fetchSingleCampus} from "../redux/singleCampus"
import { unregisterStudent } from "../redux/students"
import Link from "react-router-dom/Link"


class SingleCampus extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    this.props.loadSingleCampus(this.props.match.params.campusId)
    this.setState( {loading: false })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.singleCampus.name !== this.props.singleCampus.name || prevProps.singleCampus.address !== this.props.singleCampus.address) {
      this.props.loadSingleCampus(this.props.match.params.campusId)}}

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("CLICKED PROPS", this.props)
    // this.props.updateStudent({ ...this.props.singleStudent, ...this.state });
  }

  render() {
    const campus = this.props.singleCampus
    const students = campus.students || []
    const { loading } = this.state

   return (
    <div id="single-campus" className="column">
       <div>{loading && <div>Loading</div>}</div>
      <div id="single-campus-detail" className="row">
        <div className="column mr1">
        <img src={campus.imageUrl} />
          <h1>Campus Name: {campus.name}</h1>
          <h1>Address: {campus.address}</h1>
          <p>Description: {campus.description}</p>
          <div> {students.length ? <div>{students.map((student) => {
        return (
          <div className="single-student-detail" key={student.id}>
        <Link to ={`/students/${student.id}`}key={student.id}>
        <div key={student.id}>
          <div> Name: {student.firstName} {student.lastName} </div>
          <img src={student.imageUrl} />
        </div>
        </Link>
        <button
        type="submit"
          className= "unregister"
          onClick={() => this.props.unregisterStudent({student})}>
          UNREGISTER
        </button>
          </div>
          )
        })}
                                   </div>
        : "No Students Assigned to Campus"}
          </div>
        </div>
      </div>
    </div>
   )}}

const mapStateToProps = (state) => {
  return {
    singleCampus: state.singleCampus
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    unregisterStudent: (student) => dispatch(unregisterStudent(student, history)),
    loadSingleCampus: (id) => dispatch(fetchSingleCampus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
