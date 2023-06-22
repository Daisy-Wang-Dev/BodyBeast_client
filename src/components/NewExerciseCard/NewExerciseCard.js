import RemoveIcon from "../../assets/icons/remove.svg";
import CompleteIcon from "../../assets/icons/complete.svg";
import AddIcon from "../../assets/icons/add.svg";
import { useState } from "react";
import "./NewExerciseCard.scss";

const NewExerciseCard = () => {
  //   // Add one more set
  const [counter, setCounter] = useState(1);

  const handleAddClick = () => {
    setCounter(counter + 1);
  };

  //Completed a set
  const [isCompletedRow, setCompletedRow] = useState({});

  const handleCompleteClick = (index) => {
    setCompletedRow({ ...isCompletedRow, [index]: !isCompletedRow[index] });
  };

  //Remove a set
  const handleRemoveClick = () => {
    setCounter(counter - 1);
  };

  const [trainingName, setTrainingName] = useState("");
  const handletrainingNameChange = (e) => {
    setTrainingName(e.target.value);
  };

  return (
    <article className="training__exercise">
      <input
        className="training__name"
        type="text"
        name="name"
        placeholder="New Exercise"
        onChange={handletrainingNameChange}
        value={trainingName}
      />
      <div className="training__inputs">
        <div className="training__input-headers">
          <h4 className="training__input-header">kg</h4>
          <h4 className="training__input-header">reps</h4>
          <h4 className="training__input-header">completed</h4>
          <h4 className="training__input-header">remove</h4>
          <h4 className="training__input-header">add</h4>
        </div>
        {Array.from(Array(counter).keys()).map((count, index) => {
          return (
            <div
              key={index}
              className={`training__input-fields ${
                isCompletedRow[index] ? "training__input-fields--active" : ""
              }  
               `}
            >
              <input className="training__input" type="number" name="input" />
              <input className="training__input" type="number" name="input" />
              <div className="training__icon">
                <img
                  onClick={() => {
                    handleCompleteClick(index);
                  }}
                  className="training__completed"
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
    </article>
  );
};

export default NewExerciseCard;
