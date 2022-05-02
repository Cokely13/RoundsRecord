import React from "react";
import ReactDOM from 'react-dom';
import { VictoryChart, VictoryGroup,VictoryStack, VictoryBar } from "victory";
import { connect } from "react-redux";

class History extends React.Component {

  render() {
    // const getBarData = () => {
    //   return [1, 12, 3, 35, 5].map(() => {
    //     return [
    //       { x: "2/10", y: Math.random() },
    //       { x: "3/5", y: Math.random() },
    //       { x: "6/1", y: Math.random() }
    //     ];
    //   });
    // };
      const total2 = [
        { x: "2/10", y: 10 },
          { x: "3/5", y: 5 },
          { x: "6/1", y: 15 }
      ]
      const total3 = [
        { x: "2/10", y: 10 },
          { x: "3/5", y: 5 },
          { x: "6/1", y: 15 }
      ]
      const total4 = [{ x: "2/10", y: 10 }]

    const getBarData = () => {
      return [10, 20, 30, 40, 50].map(() => {
        return [
          { x: "Date 2/10", y: Math.random() },
          { x: "Date 3/5", y: Math.random() },
          { x: "Date 5/2", y: Math.random() }
        ];
      });
    };

    return (
      <div>
      <div>HISTORICAL</div>
      <div>
        <VictoryChart domainPadding={{ x: 50 }} width={400} height={400}>
            <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
              <VictoryStack colorScale={"red"}>
              {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data} />;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"green"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data} />;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"blue"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
              <VictoryStack colorScale={"red"}>
                {getBarData().map((data, index) => {
                  return <VictoryBar key={index} data={data}/>;
                })}
              </VictoryStack>
            </VictoryGroup>
        </VictoryChart>
      </div>
      </div>
    );
  }
}


export default History
