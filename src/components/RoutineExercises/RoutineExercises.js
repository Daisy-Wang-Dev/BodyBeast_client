import "./RoutineExercises.scss";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import axios from "axios";
import { useEffect, useState } from "react";
import NewExerciseCard from "../NewExerciseCard/NewExerciseCard";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import TryNewExerciseCard from "../../components/TryNewExerciseCard/TryNewExerciseCard";
import TryExerciseCard from "../../components/TryExerciseCard/TryExerciseCard";

const RoutineExercises = ({ routineId }) => {
  const [routineDetails, setRoutineDetails] = useState(null);
  const [routineName, setRoutineName] = useState("");
  const [exercises, setExercises] = useState([]);
  

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
          exercises: exercises.map((exercise) => ({name:exercise, sets:[{ weight: "", reps: "" }]})),
          newExercises: [].map((c) => ({
            name: "",
            sets: [{ weight: "", reps: "" }],
          })),
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({values}) => (
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
                    {values.exercises.map((exercise, index) => (
                      <ExerciseCard key={index} exercise={exercise.name} />
                    ))}
                  </>
                )}
              </FieldArray>
              <FieldArray name="newExercises">
                {({ push }) => (
                  <>
                    {values.newExercises.map((new_exercise, index) => (
                      <NewExerciseCard key={index} index={index} />
                    ))}
                    <h3
                    className="training__add"
                    onClick={() => push({ name: "", sets: [{ weight: "", reps: "" }] })}
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
