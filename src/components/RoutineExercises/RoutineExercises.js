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

  return (
    <section className="training">
      <form>
        <div className="training__title-container">
          <input
            className="training__title"
            type="text"
            id="title"
            name="title"
            value={name}
          />
          <h3 className="training__add">+ EXERCISE</h3>
        </div>
        {/* Need to map all exercises and onchange handler*/}
        {exercises.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}
        {/* <article className="training__exercise">
          <input
            className="training__name"
            type="text"
            name="name"
            value="lorem ipsum"
          />
          <div className="training__inputs">
            <div className="training__input-headers">
              <h4 className="training__input-header">kg</h4>
              <h4 className="training__input-header">reps</h4>
              <h4 className="training__input-header">completed</h4>
              <h4 className="training__input-header">remove</h4>
              <h4 className="training__input-header">add</h4>
            </div>
            {Array.from(Array(counter)).map((count) => {
              return (
                <div
                  key={count}
                  className={`training__input-fields ${
                    isCompleted ? "training__input-fields--active" : ""
                  }`}
                >
                  <input
                    className="training__input"
                    type="number"
                    name="input"
                  />
                  <input
                    className="training__input"
                    type="number"
                    name="input"
                  />
                  <div className="training__icon">
                    <img
                      onClick={handleCompleteClick}
                      className="traning__completed"
                      src={CompleteIcon}
                      alt="Completed exercise"
                    />
                  </div>
                  <div className="training__icon">
                    <img
                      onClick={handleRemoveClick}
                      src={RemoveIcon}
                      alt="Remove exercise"
                    />
                  </div>
                  <div className="training__icon">
                    <img
                      onClick={handleAddClick}
                      src={AddIcon}
                      alt="Remove exercise"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </article> */}
        {/* <ExerciseCard /> */}
        <button type="submit">SMASHED</button>
      </form>
    </section>
  );
};

export default RoutineExercises;
