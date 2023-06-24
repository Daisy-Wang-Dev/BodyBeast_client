import RemoveIcon from "../../assets/icons/remove.svg";
import CompleteIcon from "../../assets/icons/complete.svg";
import AddIcon from "../../assets/icons/add.svg";
import { useState } from "react";
import "./ExerciseCard.scss";
import { Field, ErrorMessage, FieldArray } from "formik";

const ExerciseCard = ({ index, values }) => {
  //   //Completed a set
  const [isCompletedRow, setCompletedRow] = useState({});

  const handleCompleteClick = (idx) => {
    setCompletedRow({ ...isCompletedRow, [idx]: !isCompletedRow[idx] });
  };

  return (
    <article className="training__exercise">
      <Field
        className="training__name"
        name={`exercises.${index}.exercise_name`}
        placeholder="New Exercise"
        type="text"
      />
      <ErrorMessage
        name={`exercises.${index}.exercise_name`}
        component="div"
        className="field-error"
      />
      <div className="training__inputs">
        <div className="training__input-headers">
          <h4 className="training__input-header">kg</h4>
          <h4 className="training__input-header">reps</h4>
          <h4 className="training__input-header">completed</h4>
          <h4 className="training__input-header">remove</h4>
          <h4 className="training__input-header">add</h4>
        </div>
        <FieldArray name={`exercises.${index}.sets`}>
          {({ remove, push }) =>
            values.exercises[index].sets.map((_, idx) => (
              <div
                key={idx}
                className={`training__input-fields ${
                  isCompletedRow[idx] ? "training__input-fields--active" : ""
                }  
             `}
              >
                <Field
                  className="training__input"
                  type="number"
                  name={`exercises.${index}.sets.${idx}.weight`}
                />
                <ErrorMessage
                  name={`exercises.${index}.sets.${idx}.weight`}
                  component="div"
                  className="field-error"
                />
                <Field
                  className="training__input"
                  type="number"
                  name={`exercises.${index}.sets.${idx}.reps`}
                />
                <ErrorMessage
                  name={`exercises.${index}.sets.${idx}.reps`}
                  component="div"
                  className="field-error"
                />

                <div className="training__icon">
                  <img
                    className="training__completed"
                    src={CompleteIcon}
                    alt="Completed exercise"
                    onClick={() => {
                      handleCompleteClick(index);
                    }}
                  />
                </div>
                <div className="training__icon">
                  <img
                    src={RemoveIcon}
                    alt="Remove exercise"
                    onClick={() => remove({ weight: "", reps: "" })}
                  />
                </div>
                <div className="training__icon">
                  <img
                    src={AddIcon}
                    alt="Remove exercise"
                    onClick={() => push({ weight: "", reps: "" })}
                  />
                </div>
              </div>
            ))
          }
        </FieldArray>
      </div>
    </article>
  );
};

export default ExerciseCard;
