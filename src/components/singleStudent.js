import { useParams } from "react-router-dom";
import StudentChart from "./studentChart";
import "./components.css";

export default function Student() {
  let params = useParams();
  return (
    <main className="mainStudent">
      <h2>{params.StudentId}</h2>
      <StudentChart student={params.StudentId} />
    </main>
  );
}
