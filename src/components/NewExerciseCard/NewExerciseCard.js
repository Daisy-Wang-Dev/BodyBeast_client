import RemoveIcon from "../../assets/icons/remove.svg";
import AddIcon from "../../assets/icons/add.svg";
import { useState } from "react";
import "./NewExerciseCard.scss";
import { Field, ErrorMessage, FieldArray } from "formik";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

const NewExerciseCard = ({ index, values, validate, validateName, remove }) => {
  //Completed a set
  const [isCompletedRow, setCompletedRow] = useState({});

  const handleCompleteClick = (index) => {
    setCompletedRow({ ...isCompletedRow, [index]: !isCompletedRow[index] });
  };

  return (
    <article className="training__exercise">
      <Field
        className="training__name"
        type="text"
        name={`newExercises.${index}.exercise_name`}
        placeholder="New Exercise"
        validate={validateName}
      />
      <ErrorMessage
        name={`newExercises.${index}.exercise_name`}
        component="span"
        className="training__error"
      />
      <h4 onClick={() => remove(index)} className="training__remove-exercise">
        X
      </h4>
      <div className="training__inputs">
        <FieldArray name={`newExercises.${index}.sets`}>
          {({ remove, push }) => (
            <>
              <div className="training__input-headers">
                <h4 className="training__input-header">kg</h4>
                <h4 className="training__input-header">reps</h4>
                <h4 className="training__input-header">completed</h4>
                <h4 className="training__input-header">remove</h4>
                <h3
                  className="training__input-header training__input-header--add"
                  onClick={() => push({ weight: "", reps: "" })}
                >
                  + set
                </h3>
              </div>

              {values.newExercises[index].sets.map((_, idx) => (
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
                    name={`newExercises.${index}.sets.${idx}.weight`}
                    validate={validate}
                  />
                  <ErrorMessage
                    name={`newExercises.${index}.sets.${idx}.weight`}
                    component="span"
                    className="training__error"
                  />
                  <Field
                    className="training__input"
                    type="number"
                    name={`newExercises.${index}.sets.${idx}.reps`}
                    validate={validate}
                  />
                  <ErrorMessage
                    name={`newExercises.${index}.sets.${idx}.reps`}
                    component="span"
                    className="training__error"
                  />
                  <div className="training__icon">
                    <Checkbox
                      className="training__checkbox"
                      color="success"
                      onClick={() => {
                        handleCompleteClick(idx);
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
                </div>
              ))}
            </>
          )}
        </FieldArray>
      </div>
    </article>
  );
};

export default NewExerciseCard;
