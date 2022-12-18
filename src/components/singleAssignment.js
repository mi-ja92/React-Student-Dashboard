import { useParams } from "react-router-dom";
import AssignmentChart from "./studentChart";

export default function Assignment() {
  let params = useParams();
  return (
    <main>
      <h2>{params.AssignmentId}</h2>
      <AssignmentChart student={params.AssignmentId} />
    </main>
  );
}
