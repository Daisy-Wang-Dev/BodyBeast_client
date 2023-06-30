import "./RoutineExercises.scss";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import NewExerciseCard from "../NewExerciseCard/NewExerciseCard";
import { Link } from "react-router-dom";
import { Formik, Field, Form, FieldArray } from "formik";
import * as Yup from "yup";

const RoutineExercises = ({ routineId }) => {
  const [routineDetails, setRoutineDetails] = useState(null);
  const [routineName, setRoutineName] = useState("");
  const [exercises, setExercises] = useState([]);

  // Indicate successful submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getRoutineDetails = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/user/1/routine/${routineId}/exercises`
      );
      const { name, exercises } = response.data;

      setRoutineName(name);
      setExercises(exercises);
      setRoutineDetails(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    getRoutineDetails();
  }, []);

  const validationSchema = Yup.object().shape({
    routineName: Yup.string().required("Routine Name is required"),
  });

  const validate = (value) => {
    let error;
    if (!value) {
      error = "!";
    }
    return error;
  };

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "!";
    }
    return error;
  };

  const HandleSubmit = async (values) => {
    const { routineName, exercises, newExercises } = values;
    const allExercises = exercises.concat(newExercises);
    const postedData = { routineName, exercises: allExercises };

    try {
      await axios.post(
        process.env.REACT_APP_API_URL + "/user/1/routine",
        postedData
      );
      setIsSubmitted(true);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  if (!routineDetails) {
    return <h1 className="loading">DATA LOADING...</h1>;
  }

  return (
    <section className="training">
      <Formik
        initialValues={{
          routineName: routineName,
          exercises: exercises.map((exercise) => ({
            exercise_name: exercise,
            sets: [{ weight: "", reps: "" }],
          })),
          newExercises: [].map((c) => ({
            exercise_name: "",
            sets: [{ weight: "", reps: "" }],
          })),
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => HandleSubmit(values)}
      >
        {({ values }) => (
          <Form className="training__form">
            <div className="training__title-container">
              <Field
                className="training__title"
                type="text"
                id="title"
                name="routineName"
              />
            </div>
            <div className="training__body-container">
              <FieldArray name="exercises">
                {({ remove }) => (
                  <>
                    {values.exercises.map((exercise, index) => (
                      <ExerciseCard
                        key={index}
                        index={index}
                        values={values}
                        validate={validate}
                        validateName={validateName}
                        remove={remove}
                      />
                    ))}
                  </>
                )}
              </FieldArray>
              <FieldArray name="newExercises">
                {({ push, remove }) => (
                  <>
                    {values.newExercises.map((new_exercise, index) => (
                      <NewExerciseCard
                        key={index}
                        index={index}
                        values={values}
                        validate={validate}
                        validateName={validateName}
                        remove={remove}
                      />
                    ))}
                    <h3
                      className="training__add"
                      onClick={() =>
                        push({
                          exercise_name: "",
                          sets: [{ weight: "", reps: "" }],
                        })
                      }
                    >
                      + EXERCISE
                    </h3>
                  </>
                )}
              </FieldArray>
              <button
                className="training__btn training__btn--complete"
                type="submit"
              >
                SMASHED
              </button>
              <Link
                to="/routines"
                className="training__btn training__btn--cancel"
              >
                CANCEL
              </Link>
            </div>
            {isSubmitted && (
              <h2 className="training__message">
                🎉 Well Done & Keep Smashing 🎉
              </h2>
            )}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default RoutineExercises;
