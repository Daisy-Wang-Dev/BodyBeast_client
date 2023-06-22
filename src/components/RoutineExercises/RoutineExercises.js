import "./RoutineExercises.scss";
import ExerciseCard from "../ExerciseCard.js/ExerciseCard";
import axios from "axios";
import { useEffect, useState } from "react";

const RoutineExercises = ({ routineId }) => {
  const [routineDetails, setRoutineDetails] = useState(null);

  const getRoutineDetails = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/user/1/routine/${routineId}/exercises`
      );
      setRoutineDetails(response.data);
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

  const { name, exercises } = routineDetails;
//   const [routineName,setRoutineName] = useState(name);

//   const handleRoutineNameChange = (e) => {
//     setRoutineName(e.target.value);
//   }

  return (
    <section className="training">
      <form className="training__form">
        <div className="training__title-container">
          <input
            className="training__title"
            type="text"
            id="title"
            name="title"
            // onChange={handleRoutineNameChange}
            value={name}
          />
          <h3 className="training__add">+ EXERCISE</h3>
        </div>
        <div className="training__body-container">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
        <button className="training__submit-btn" type="submit">SMASHED</button>
        </div>
      </form>
    </section>
  );
};

export default RoutineExercises;
