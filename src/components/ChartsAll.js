import React from "react";
import data from "./data/data.json";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
  VictoryLegend,
  VictoryLabel,
  VictoryContainer,
  VictoryTooltip,
} from "victory";
import "./components.css";

function ChartsAll() {
  const assignmentsData = Object.values(
    data.reduce((accumulator, { assignment, difficulty, fun }) => {
      accumulator[assignment] = accumulator[assignment] || {
        assignment,
        difficulty: 0,
        fun: 0,
        students: 0,
      };
      accumulator[assignment].difficulty += difficulty;
      accumulator[assignment].fun += fun;
      accumulator[assignment].students++;
      return accumulator;
    }, [])
  );

  const averageData = assignmentsData.map(
    ({ assignment, students, difficulty, fun }) => {
      return {
        assignment,
        students,
        difficulty: difficulty / students,
        fun: fun / students,
      };
    }
  );

  const chartData = averageData.map((values) => ({
    assignment: values.assignment,
    difficulty: values.difficulty,
    fun: values.fun,
    label: `Assignment ${values.assignment}, 
         Difficulty: ${values.difficulty.toFixed(1)},
         Fun: ${values.fun.toFixed(1)}`,
  }));

  return (
    <div className="chartAll">
      <VictoryChart
        domainPadding={{ x: 15 }}
        domain={{ x: [0, 56], y: [0.0, 5.0] }}
        theme={VictoryTheme.material}
        width={1200}
        height={400}
        events={[
          {
            childName: "legend",
            target: "labels",
            eventHandlers: {
              onMouseOver: (e, props) => {
                return [
                  {
                    target: "data",
                    mutation: () => {
                      return { style: { fill: "orange" } };
                    },
                  },
                  {
                    childName: ["bar1", "bar2"],
                    target: "data",
                    eventKey: "all",
                    mutation: () => {
                      return { style: { fill: "orange" } };
                    },
                  },
                ];
              },
              onMouseOut: (e, props) => {
                return [
                  {
                    target: "data",
                    mutation: () => null,
                  },
                  {
                    childName: ["bar1", "bar2"],
                    target: "data",
                    eventKey: "all",
                    mutation: () => {
                      return null;
                    },
                  },
                ];
              },
            },
          },
        ]}
        containerComponent={<VictoryContainer responsive="false" />}
      >
        <VictoryLegend
          name="legend"
          x={550}
          y={24}
          itemsPerRow={2}
          orientation="horizontal"
          data={[
            { id: 1, name: "Fun", symbol: { fill: "#90A4AE", type: "square" } },
            {
              id: 2,
              name: "Difficulty",
              symbol: { fill: "#455A64", type: "square" },
            },
          ]}
        />
        <VictoryLabel
          x={10}
          y={400}
          text="Assignment"
          style={[{ fill: "black", fontSize: 20 }]}
        />

        <VictoryAxis
          style={{
            ticks: { stroke: "grey", size: 5 },
            tickLabels: {
              angle: 60,
              fontSize: 10,
              padding: 2,
              textAnchor: "start",
            },
          }}
        />
        <VictoryLabel
          x={10}
          y={80}
          angle={-90}
          text="Rating"
          style={[{ fill: "black", fontSize: 20 }]}
        />

        <VictoryAxis dependentAxis />

        <VictoryGroup offset={10}>
          <VictoryBar
            id={1}
            name={"bar1"}
            labelComponent={<VictoryTooltip />}
            style={{ data: { fill: "#90A4AE" } }}
            data={chartData}
            x="assignment"
            y="fun"
            barWidth={8}
          />
          <VictoryBar
            id={2}
            name={"bar2"}
            labelComponent={<VictoryTooltip />}
            style={{ data: { fill: "#455A64" } }}
            data={chartData}
            x="assignment"
            y="difficulty"
            barWidth={8}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default ChartsAll;
