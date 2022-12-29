import { React, useState } from "react";
import { Chart } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import { useParams } from "react-router-dom";
import data from "./components/data/data.json";

const StudentChart = () => {
  const { name } = useParams();
  const singleStudent = data.filter((student) => {
    return student.name === name;
  });

  const studentRatings = singleStudent.map((student) => ({
    assignment: student.assignment,
    difficulty: student.difficulty,
    fun: student.fun,
    label: `assignment ${student.assignment}, 
       Difficulty: ${student.difficulty.toFixed(1)},
       fun: ${student.fun.toFixed(1)}`,
  }));

  const [chartData] = useState({
    labels: [{ studentRatings }],
    datasets: [
      {
        label: "Difficulty",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: { studentRatings },
      },
      {
        label: "Fun",
        backgroundColor: "rgba(71, 225, 167, 0.5)",
        borderColor: "rgb(71, 225, 167)",
        data: { studentRatings },
      },
    ],
  });
  return (
    <div>
      {/* <label className="diff">
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
      </label> */}
      <CDBContainer>
        <h3 className="mt-5">Bar chart</h3>
        <Chart data={chartData} options={{ responsive: true }} />
      </CDBContainer>
    </div>
  );
};

export default StudentChart;
