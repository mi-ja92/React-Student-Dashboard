import React from "react";
import data from "./data/data.json";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryAxis,
  VictoryTheme,
  VictoryContainer,
} from "victory";

let newData = [];
data.map((item) => {
  return newData.push(item);
});

class StudentChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: [],
      difficulty: true,
      enjoyment: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.filterStudents = this.filterStudents.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  filterStudents() {
    let value = this.props.student;
    let filteredItems = newData.filter((item) => {
      return item.name === value;
    });

    this.setState((prevState) => {
      let newState = { ...prevState, studentData: filteredItems };
      return newState;
    });
  }

  componentDidMount() {
    this.filterStudents();
  }

  componentDidUpdate(prevProps) {
    if (this.props.student !== prevProps.student) {
      this.filterStudents(this.props.student);
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
          domainPadding={{ x: 15 }}
          domain={{ x: [0, 56], y: [0.0, 5.0] }}
          theme={VictoryTheme.material}
          width={1200}
          height={300}
          containerComponent={<VictoryContainer responsive={false} />}
        >
          <VictoryAxis
            style={{
              ticks: { stroke: "grey", size: 5 },
              tickLabels: {
                angle: 45,
                fontSize: 12,
                padding: 5,
                textAnchor: "begin",
              },
            }}
          />
          <VictoryAxis dependentAxis />
          <VictoryGroup offset={10} colorScale={"qualitative"}>
            {this.state.difficulty ? (
              <VictoryBar
                style={{ data: { fill: "#4f8bc9" } }}
                barWidth={7}
                data={this.state.studentData}
                x={"assignment"}
                y={"difficultyRating"}
              />
            ) : null}

            {this.state.enjoyment ? (
              <VictoryBar
                style={{ data: { fill: "#ffb212" } }}
                barWidth={7}
                data={this.state.studentData}
                x={"assignment"}
                y={"enjoymentRating"}
              />
            ) : null}
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default StudentChart;
