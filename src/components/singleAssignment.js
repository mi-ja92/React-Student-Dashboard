import { useParams } from "react-router-dom";
import AssignmentChart from "./assingmentChart";
import "./components.css";

export default function Assignment() {
  let params = useParams();
  return (
    <main className="mainAssignment">
      <h2>{params.AssignmentId}</h2>
      <AssignmentChart assignment={params.AssignmentId} />
    </main>
  );
}
