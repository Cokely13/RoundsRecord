import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, } from 'victory';

const name = "ryan"

class Drinks extends React.Component {
  render() {
    return (
<VictoryPie
  colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
  data={[
    { x: name, y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>
    )}}


 export default Drinks
