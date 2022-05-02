// import React from 'react';
// import ReactDOM from 'react-dom';
// import { connect } from "react-redux";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
// import { fetchOrders } from '../redux/ordersStore';

// // const orders = this.props.orders
// //     console.log("ORD!!", orders)

// // const data2012 = [
// //   {quarter: 1, earnings: 13000},
// //   {quarter: 2, earnings: 16500},
// //   {quarter: 3, earnings: 14250},
// //   {quarter: 4, earnings: 19000}
// // ];

// // const data2013 = [
// //   {quarter: 1, earnings: 15000},
// //   {quarter: 2, earnings: 12500},
// //   {quarter: 3, earnings: 19500},
// //   {quarter: 4, earnings: 13000}
// // ];

// // const data2014 = [
// //   {quarter: 1, earnings: 11500},
// //   {quarter: 2, earnings: 13250},
// //   {quarter: 3, earnings: 20000},
// //   {quarter: 4, earnings: 15500}
// // ];

// // const data2015 = [
// //   {quarter: 1, earnings: 18000},
// //   {quarter: 2, earnings: 13250},
// //   {quarter: 3, earnings: 15000},
// //   {quarter: 4, earnings: 12000}
// // ];

// // const total = orders.price

// function Total (array){
//   let price = 0
//   for (let i = 0; i < array.length; i++) {
//     price = price + array[i].price
//   }
//   console.log("price", price)
//   return price
// }

//  class Victory extends React.Component {

// componentDidMount() {
//   this.props.fetchOrders();
//   console.log('STATE', this.props.orders)
// }

//   render() {
//     const orders = this.props.orders
//     console.log("ORD!!", orders)
//     const drinks = Total(orders)
//     console.log("drinks!!", drinks)

//     const dataDrinks = this.props.orders.map(order)

// const data2012 = [
//   {quarter: 1, price: drinks},
//   {quarter: 2, price: 16},
//   {quarter: 3, price: drinks},
//   {quarter: 4, price: 19}
// ];

//     return (
//       <div>
//         <h1>Victory Tutorial</h1>
//         <VictoryChart
//           domainPadding={10}
//           theme={VictoryTheme.material}
//         >
//           <VictoryAxis
//             tickValues={["1", "2", "3", "4"]}
//           />
//           <VictoryAxis
//             dependentAxis
//             tickFormat={(x) => (`$${x / 10}`)}
//           />
//           <VictoryStack
//             colorScale={"warm"}
//           >
//             {/* {this.props.orders.map((order) => {
//         return (
//           <div className="student" key={order.id}>
//           <VictoryBar
//           name=  {order.name}
//           price= {order.price}
//           x={"name"}
//           y={"price"}
//         />
//           </div>
//         )})} */}
//             <VictoryBar
//               data= [
//                 {quarter: 1, price: drinks},
//                 {quarter: 2, price: 16},
//                 {quarter: 3, price: drinks},
//                 {quarter: 4, price: 19}
//               ]
//               x= "1"
//               y= "price"
//             />
//             {/* <VictoryBar
//               data={data2013}
//               x={"quarter"}
//               y={"earnings"}
//             />
//             <VictoryBar
//               data={data2014}
//               x={"quarter"}
//               y={"earnings"}
//             />
//             <VictoryBar
//               data={data2015}
//               x={"quarter"}
//               y={"earnings"}
//             /> */}
//           </VictoryStack>
//         </VictoryChart>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//    orders: state.orders
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     fetchOrders: () => dispatch(fetchOrders()),
//   };
// };

// export default connect(mapStateToProps, mapDispatch)(Victory)
