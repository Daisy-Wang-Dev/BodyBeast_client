import "./RoutineExercises.scss";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import NewExerciseCard from "../NewExerciseCard/NewExerciseCard";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import TryNewExerciseCard from "../../components/TryNewExerciseCard/TryNewExerciseCard";
import TryExerciseCard from "../../components/TryExerciseCard/TryExerciseCard";
import RemoveIcon from "../../assets/icons/remove.svg";
import CompleteIcon from "../../assets/icons/complete.svg";
import AddIcon from "../../assets/icons/add.svg";

const RoutineExercises = ({ routineId }) => {
  const [routineDetails, setRoutineDetails] = useState(null);
  const [routineName, setRoutineName] = useState("");
  const [exercises, setExercises] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleAddClick = () => {
    setCounter(counter + 1);
  };

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

  const HandleSubmit = async (values) => {
    // const postedData =
    console.log(values);
    // try{
    //   await axios.post(process.env.REACT_APP_API_URL+)

    // }catch(err){
    //   console.log(`Error: ${error.message}`);
    // }
  };

  if (!routineDetails) {
    return <h1 className="loading">Data Loading</h1>;
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
          newExercises: Array.from(Array(counter).keys()).map((c) => ({
            exercise_name: "",
            sets: [{ weight: "", reps: "" }],
          })),
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2));
        }}
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
                {() => (
                  <>
                    {values.exercises.map((_exercise, index) => (
                      // <ExerciseCard
                      //   key={index}
                      //   index={index}
                      //   exercise={exercise}
                      // />
                      <article key={index} className="training__exercise">
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
                            <h4 className="training__input-header">
                              completed
                            </h4>
                            <h4 className="training__input-header">remove</h4>
                            <h4 className="training__input-header">add</h4>
                          </div>
                          <FieldArray name={`exercises.${index}.sets`}>
                            {({ remove, push }) => (
                              <>
                                {values.exercises[index].sets.map((_, idx) => (
                                  <div
                                    key={idx}
                                    className="training__input-fields"
                                  >
                                    <Field
                                      className="training__input"
                                      type="number"
                                      name={`exercises.${index}.sets.${idx}.weight`}
                                    />
                                    <Field
                                      className="training__input"
                                      type="number"
                                      name={`exercises.${index}.sets.${idx}.reps`}
                                    />
                                    <div className="training__icon">
                                      <img
                                        className="training__completed"
                                        src={CompleteIcon}
                                        alt="Completed exercise"
                                      />
                                    </div>
                                    <div className="training__icon">
                                      <img
                                        src={RemoveIcon}
                                        alt="Remove exercise"
                                        onClick={()=>remove({ weight: "", reps: "" })}
                                      />
                                    </div>
                                    <div className="training__icon">
                                      <img
                                        src={AddIcon}
                                        alt="Remove exercise"
                                        onClick={()=>push({ weight: "", reps: "" })}
                                      />
                                    </div>
                                  </div>
                                ))}
                              </>
                            )}
                          </FieldArray>
                        </div>
                      </article>
                    ))}
                  </>
                )}
              </FieldArray>
              <FieldArray name="newExercises">
                {({ push }) => (
                  <>
                    {values.newExercises.map((new_exercise, index) => (
                      <NewExerciseCard key={index} index={index} values={values} />
                    ))}
                    <h3
                      className="training__add"
                      onClick={() =>
                        push({ exercise_name: "", sets: [{ weight: "", reps: "" }] })
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
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default RoutineExercises;
