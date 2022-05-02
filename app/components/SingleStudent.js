import React from "react"
import {connect} from 'react-redux'
import {fetchSingleStudent} from "../redux/singleStudent"
import Link from "react-router-dom/Link"

function Total (array){
  let price = 0
  for (let i = 0; i < array.length; i++) {
    price = price + array[i].price
  }
  console.log("price", price)
  return price
}

class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount () {
    this.props.loadSingleStudent(this.props.match.params.studentId)
    // console.log("TEST", this.props.singleStudent.orders.length)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.singleStudent.firstName !== this.props.singleStudent.firstName || prevProps.singleStudent.lastName !== this.props.singleStudent.lastName || prevProps.singleStudent.email !== this.props.singleStudent.email) {
    this.props.loadSingleStudent(this.props.match.params.studentId)}
  }

  render() {
    const student = this.props.singleStudent
    console.log("ORDERS", this.props.singleStudent.orders)
    const orders = this.props.singleStudent.orders
    // const price = Total(orders)
    // console.log("PRICE", orders.length)
   return (
    <div className="single-student column">
      <div className="single-student-detail row">
        <div className="column mr1">
          <h1>{student.name} </h1>
        </div>
          <img src={student.imageUrl} />
      </div>
    </div>
   )}}

const mapStateToProps = (state) => {
  return {
    singleStudent: state.singleStudent,
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    loadSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
