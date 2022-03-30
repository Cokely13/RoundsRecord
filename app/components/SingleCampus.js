import React from "react"
import {connect} from 'react-redux'
import {fetchSingleCampus} from "../redux/singleCampus"


class SingleCampus extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.props.loadSingleCampus(this.props.match.params.campusId)

  }

  render() {
    const campus = this.props.SingleCampus
    console.log("Campus", campus)
    const students = campus.students
    console.log("Students", students)
   return (
    <div id="single-campus" className="column">
      <div id="single-campus-detail" className="row">
        <div className="column mr1">
          <h1>{campus.name}</h1>
          <h1>{campus.address}</h1>
          <p>{campus.description}</p>
          {/* <p>{students.firstName}</p> */}
        </div>
          {/* <img src={campus.imageUrl} /> */}
      </div>
    </div>
   )}}

const mapStateToProps = (state) => {
  return {
    SingleCampus: state.singleCampus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    loadSingleCampus: (id) => dispatch(fetchSingleCampus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
