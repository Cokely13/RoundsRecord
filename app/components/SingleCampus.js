import React from "react"
import {connect} from 'react-redux'
import {fetchSingleCampus} from "../redux/singleCampus"
import { unregisterStudent } from "../redux/students"
import Link from "react-router-dom/Link"


class SingleCampus extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.props.loadSingleCampus(this.props.match.params.campusId)

  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("CLICKED PROPS", this.props)
    // this.props.updateStudent({ ...this.props.singleStudent, ...this.state });
  }

  render() {
    const campus = this.props.SingleCampus
    const students = campus.students || []
    const { handleSubmit} = this;

   return (
    <div id="single-campus" className="column">
      <div id="single-campus-detail" className="row">
        <div className="column mr1">
          <h1>{campus.name}</h1>
          <h1>{campus.address}</h1>
          <p>{campus.description}</p>
          <div> {students.length ? <div>{students.map((student) => {
        return (
          <div key={student.id}>
        <Link to ={`/students/${student.id}`}key={student.id}>
        <div key={student.id}>
          <div> Name: {student.firstName} </div>
          <div> Name: {student.lastName} </div>
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
          {/* <img src={campus.imageUrl} /> */}
        </div>
      </div>
    </div>
   )}}

const mapStateToProps = (state) => {
  return {
    SingleCampus: state.singleCampus
  }
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    unregisterStudent: (student) => dispatch(unregisterStudent(student, history)),
    loadSingleCampus: (id) => dispatch(fetchSingleCampus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
