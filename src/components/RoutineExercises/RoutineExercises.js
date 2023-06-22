import "./RoutineExercises.scss";
import RemoveIcon from "../../assets/icons/remove.svg";
import CompleteIcon from "../../assets/icons/complete.svg";
import AddIcon from "../../assets/icons/add.svg";
import { useState } from "react";

const RoutineExercises = () => {

  const [counter, setCounter] = useState(1);

  const handleAddClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <section className="training">
      <form>
        <div className="training__title-container">
          <input
            className="training__title"
            type="text"
            id="title"
            name="title"
            value="TRAINING"
          />
          <h3 className="training__add">+ EXERCISE</h3>
        </div>
        {/* Need to map all exercises and onchange handler*/}
        <article className="training__exercise">
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
            { Array.from(Array(counter)).map((count) => {
              return (
                <div key={count} className="training__input-fields">
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
                    <img src={CompleteIcon} alt="Completed exercise" />
                  </div>
                  <div className="training__icon">
                    <img src={RemoveIcon} alt="Remove exercise" />
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
        <button type="submit">SMASHED</button>
      </form>
    </section>
  );
};

export default RoutineExercises;
