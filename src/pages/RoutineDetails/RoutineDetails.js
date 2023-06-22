import { useParams } from "react-router-dom";
import RoutineExercises from "../../components/RoutineExercises/RoutineExercises";
import "./RoutineDetails.scss";

const RoutineDetails = () => {
  const { routineId } = useParams();
  // console.log(routineId);

  return (
    <main>
      <RoutineExercises />
    </main>
  );
};

export default RoutineDetails;