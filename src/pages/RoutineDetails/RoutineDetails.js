import { useParams } from "react-router-dom";
import RoutineExercises from "../../components/RoutineExercises/RoutineExercises";
import "./RoutineDetails.scss";

const RoutineDetails = () => {
  const { routineId } = useParams();

  return (
    <main>
      <RoutineExercises routineId={routineId}/>
    </main>
  );
};

export default RoutineDetails;
