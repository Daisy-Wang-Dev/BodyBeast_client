import "./RoutineExercises.scss";
import ExerciseCard from "../ExerciseCard.js/ExerciseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import NewExerciseCard from "../NewExerciseCard/NewExerciseCard";

const RoutineExercises = ({ routineId }) => {
  const [routineDetails, setRoutineDetails] = useState(null);
  const [routineName, setRoutineName] = useState("");
  const [exerciseCounter, setExerciseCounter] = useState(0);

  const handleAddExerciseClick = () => {
    setExerciseCounter(exerciseCounter + 1);
  };

  const getRoutineDetails = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/user/1/routine/${routineId}/exercises`
      );
      setRoutineDetails(response.data);
      setRoutineName(response.data.name);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    getRoutineDetails();
  }, []);

  if (!routineDetails) {
    return <h1 className="loading">Data Loading</h1>;
  }

  const handleRoutineNameChange = (e) => {
    setRoutineName(e.target.value);
  };
  const { exercises } = routineDetails;

  return (
    <section className="training">
      <form className="training__form">
        <div className="training__title-container">
          <input
            className="training__title"
            type="text"
            id="title"
            name="title"
            onChange={handleRoutineNameChange}
            value={routineName}
          />
          <h3 onClick={handleAddExerciseClick} className="training__add">+ EXERCISE</h3>
        </div>
        <div className="training__body-container">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
          {Array.from(Array(exerciseCounter).keys()).map((count, index)=>
            <NewExerciseCard key={index}/>
          )}
          <button className="training__submit-btn" type="submit">
            SMASHED
          </button>
        </div>
      </form>
    </section>
  );
};

export default RoutineExercises;
