import React from "react";
import data from "./data/data.json";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryAxis,
  VictoryTheme,
  VictoryContainer,
  VictoryTooltip,
} from "victory";

let newData = [];
data.map((item) => {
  return newData.push(item);
});

class AssignmentChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentData: [],
      difficulty: true,
      enjoyment: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterAssignments = this.filterAssignments.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  filterAssignments() {
    let value = this.props.assignment;
    let filteredItems = newData.filter((item) => {
      return item.assignment === value;
    });

    this.setState((prevState) => {
      let newState = { ...prevState, assignmentData: filteredItems };
      return newState;
    });
  }

  componentDidMount() {
    this.filterAssignments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.assignment !== prevProps.assignment) {
      this.filterAssignments(this.props.assignment);
    }
  }

  render() {
    return (
      <div>
        <label className="diff">
          <input
            className="blue-input"
            type="checkbox"
            name="difficulty"
            onChange={this.handleChange}
            checked={this.state.difficulty}
          />
          Difficulty
        </label>
        <br />
        <label className="enjoy">
          <input
            className="orange-input"
            type="checkbox"
            name="enjoyment"
            onChange={this.handleChange}
            checked={this.state.enjoyment}
          />
          Enjoyment
        </label>

        <VictoryChart
          maxDomain={{ x: 11 }}
          domainPadding={{ x: 0.8 }}
          domain={{ x: [0.8, 56], y: [0.0, 5.0] }}
          theme={VictoryTheme.material}
          width={1200}
          height={300}
          containerComponent={<VictoryContainer responsive={false} />}
        >
          <VictoryAxis
            style={{
              ticks: { size: 0 },
              tickLabels: {
                angle: 45,
                fontSize: 12,
                padding: 10,
                textAnchor: "start",
                transform: "skewX(5)",
              },
            }}
          />

          <VictoryAxis dependentAxis />
          <VictoryGroup
            domainPadding={{ x: 10 }}
            offset={50}
            colorScale={"qualitative"}
          >
            {this.state.difficulty ? (
              <VictoryBar
                alignment="start"
                labels={({ datum }) => {
                  if (datum.labels) {
                    let label = "";
                    datum.labels.forEach((item) => {
                      let labelItem = `${item.name}: ${item.difficulty} \n`;
                      label += labelItem;
                    });
                  }
                  return `Difficulty Rating:${datum.difficulty}`;
                }}
                labelComponent={<VictoryTooltip />}
                style={{ data: { fill: "#90A4AE" } }}
                barWidth={50}
                data={this.state.assignmentData}
                x={"name"}
                y={"difficulty"}
                barRatio={0.1}
              />
            ) : null}

            {this.state.enjoyment ? (
              <VictoryBar
                alignment="start"
                labels={({ datum }) => {
                  if (datum.labels) {
                    let label = "";
                    datum.labels.forEach((name) => {
                      let labelItem = `${name.name}: ${name.fun} \n`;
                      label += labelItem;
                    });
                  }
                  return `Fun Rating:${datum.fun}`;
                }}
                style={{ data: { fill: "#455A64" } }}
                barWidth={50}
                data={this.state.assignmentData}
                x={"name"}
                y={"fun"}
                barRatio={0.1}
                labelComponent={<VictoryTooltip center />}
              />
            ) : null}
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default AssignmentChart;
