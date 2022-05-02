import React from "react";
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryChart, VictoryTheme, VictoryLine } from "victory"
import { fetchTotals } from "../redux/totalsStore";
import { connect } from "react-redux";

// function Total (array){
//   let price = 0
//   for (let i = 0; i < array.length; i++) {
//     price = price + array[i].price
//   }
// console.log("price", price)
// return price
// }

class Totals extends React.Component {
  componentDidMount() {
    this.props.fetchTotals();
  }


  render() {
    return (
<div>
 <VictoryPie
 data= {this.props.totals.map((total) => {
  return ({x: total.name, y: total.total})})}
  />
  <div>
   <VictoryChart
   theme={VictoryTheme.material}
 >
   <VictoryLine
     style={{
       data: { stroke: "#c43a31" },
       parent: { border: "1px solid #ccc"}
     }}
     data={this.props.totals.map((total) => {
      return ({x: total.name, y: total.total})})}
   />
   </VictoryChart>
  </div>
</div>
    )
}}

const mapStateToProps = (state) => {
  return {
   totals: state.totals
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchTotals: () => dispatch(fetchTotals())
  };
};

export default connect(mapStateToProps, mapDispatch)(Totals)
