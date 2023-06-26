import "./PerformanceStat.scss";
import PerformanceCard from "../PerformanceCard/PerformanceCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PerformanceStat = () => {
  const [exerciseData, setExerciseData] = useState(null);
  const getExerciseData = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/user/1/exercises"
      );
      setExerciseData(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  useEffect(() => {
    getExerciseData();
  }, []);

  if (!exerciseData) {
    return <h1 className="loading">DATA LOADING...</h1>;
  }
  return (
    <section className="performance-stats">
      <h1 className="performance-stats__title">PERFORMANCE STATS</h1>
      {exerciseData.map((exercise,index) => (
        <PerformanceCard key={index} exercise={exercise} />
      ))}

    </section>
  );
};

export default PerformanceStat;
