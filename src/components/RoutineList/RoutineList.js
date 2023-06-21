import { useEffect, useState } from "react";
import "./RoutineList.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const RoutineList = () => {
  const [routines, setRoutines] = useState(null);

  const getRoutines = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/user/1/routine"
      );
      console.log(response.data);
      setRoutines(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    getRoutines();
  }, []);

  if (!routines) {
    return <h1 className="loading">Loading Data</h1>;
  }

  return routines.map((routine) => {
    return (
      <article key={routine.id} className="routine">
        <h2 className="routine__title">{routine.name}</h2>
        <Link to={`/routines/${routine.id}`} className="routine__btn">
          START
        </Link>
      </article>
    );
  });
};

export default RoutineList;
