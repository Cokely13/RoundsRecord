import React from "react"
import {connect} from 'react-redux'
import {fetchSingleStudent} from "../redux/singleStudent"
import Link from "react-router-dom/Link"
import { VictoryPie, VictoryChart, VictoryTheme, VictoryLine } from "victory"

function Total (array){
  let price = 0
  for (let i = 0; i < array.length; i++) {
    price = price + array[i].price
  }
  console.log("price", price)
  return price
}

class SingleFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      graph: false
    }
  }
  componentDidMount () {
    this.props.loadSingleStudent(this.props.match.params.friendsId)
    // console.log("TEST", this.props.singleStudent.orders.length)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.singleStudent.firstName !== this.props.singleStudent.firstName || prevProps.singleStudent.lastName !== this.props.singleStudent.lastName || prevProps.singleStudent.email !== this.props.singleStudent.email) {
    this.props.loadSingleStudent(this.props.match.params.studentId)}
  }

  showGraph() {
    this.setState({graph: true})
    console.log("PROPS", this.props)
    console.log("State", this.state)
  }

  render() {
    const student = this.props.singleStudent
    console.log("STUDENTS!!", this.props.singleStudent)
    console.log("ORDERS!!", this.props.singleStudent.orders)
    // const orders = this.props.singleStudent.orders
    // const price  = this.props.singleStudent.orders.price || ""
    // const price = Total(orders)
    // console.log("PRICE", orders.length)
   return (
    <div>
    <div className="single-student column">
      <div className="single-student-detail row">
        <div className="column mr1">
          <h1>{student.name} </h1>
        </div>
          <img src={student.imageUrl} />
      </div>
    </div>
    <button
    type="submit"
    className= "x-button"
     onClick={() => {this.showGraph()}}
    >
      GRAPH
    </button>
  <div>{this.state.graph ?
  <div>
   <VictoryChart
   theme={VictoryTheme.material}
 >
   <VictoryLine
     style={{
       data: { stroke: "#c43a31" },
       parent: { border: "1px solid #ccc"}
     }}
     data={[
       { x: 1, y: 2 },
       { x: 2, y: 3 },
       { x: 3, y: 5 },
       { x: 4, y: this.props.singleStudent.orders[0].price},
       { x: 5, y: 7 }
     ]}
   />
   </VictoryChart>
  </div> : "No Graph"}
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleFriend)
