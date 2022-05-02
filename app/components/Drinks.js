import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryTheme } from 'victory';

const name = "ryan"

class Drinks extends React.Component {
  render() {
    return (
      <div>
      <div>TOTAL PURCHASES</div>
<VictoryPie
  colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
  data={[
    { x: "Drinks", y: 35 },
    { x: "Meals", y: 40 },
    { x: "Cabs", y: 55 }
  ]}
/>
      </div>
    )}}


 export default Drinks
