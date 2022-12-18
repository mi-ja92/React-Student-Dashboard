import React from "react";
import data from "../components/data/data.json";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryAxis,
  VictoryTheme,
  VictoryContainer,
  VictoryLine,
} from "victory";

let newData = [];
data.map((item) => {
  return newData.push(item);
});
class ChartsAll extends React.Component {
  constructor() {
    super();
    this.state = {
      dataAll: [],
      difficulty: true,
      fun: true,
      changeGraph: true,
    };

    this.calculateAverage = this.calculateAverage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  calculateAverage() {
    const assignments = newData.map((assignment) => assignment.assignment);
    const assignmentsSingle = Array.from(new Set(assignments));
    assignmentsSingle.forEach((assign) => {
      let difficultySeperate =
        newData
          .filter((element) => element.assignment === assign)
          .reduce((prev, curr) => prev + parseInt(curr.difficultyRating), 0) /
        10;
      let enjoySeperate =
        newData
          .filter((element) => element.assignment === assign)
          .reduce((prev, curr) => prev + parseInt(curr.enjoymentRating), 0) /
        10;

      this.setState((prevState) => {
        const newAverageData = [...prevState.averageData];
        newAverageData.push({
          assignment: `${assign}`,
          difficultyRating: difficultySeperate,
          enjoymentRating: enjoySeperate,
        });
        const newState = { ...prevState, averageData: newAverageData };
        return newState;
      });
    });
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        changeGraph: !prevState.changeGraph,
      };
    });
  }

  componentDidMount() {
    this.calculateAverage();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Change Chart Type</button>
        <br />
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

        {this.state.changeGraph ? (
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
                  data={this.state.averageData}
                  x={"assignment"}
                  y={"difficultyRating"}
                />
              ) : null}

              {this.state.enjoyment ? (
                <VictoryBar
                  style={{ data: { fill: "#ffb212" } }}
                  barWidth={7}
                  data={this.state.averageData}
                  x={"assignment"}
                  y={"enjoymentRating"}
                />
              ) : null}
            </VictoryGroup>
          </VictoryChart>
        ) : null}

        {this.state.changeGraph ? null : (
          <VictoryChart
            domainPadding={{ x: 15 }}
            domain={{ x: [0, 56], y: [0.0, 5.0] }}
            theme={VictoryTheme.material}
            width={1200}
            height={300}
            containerComponent={<VictoryContainer responsive={false} />}
          >
            {this.state.difficulty ? (
              <VictoryLine
                style={{
                  data: { stroke: "#4f8bc9" },
                  parent: { border: "1px solid #ccc" },
                }}
                data={this.state.averageData}
                x="assignment"
                y="difficultyRating"
              />
            ) : null}

            {this.state.enjoyment ? (
              <VictoryLine
                style={{
                  data: { stroke: "#ffb212" },
                  parent: { border: "1px solid #ccc" },
                }}
                data={this.state.averageData}
                x="assignment"
                y="enjoymentRating"
              />
            ) : null}

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
          </VictoryChart>
        )}
      </div>
    );
  }
}

export default ChartsAll;
