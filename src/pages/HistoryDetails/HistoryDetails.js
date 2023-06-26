import { useParams } from "react-router-dom";
import "./HistoryDetails.scss";
import TrainingDetails from "../../components/TrainingDetails/TrainingDetails";
import { useEffect, useState } from "react";

const HistoryDetails = () => {
  const { routineId } = useParams();
  console.log(routineId);


  return (
    <main>
      <section className="history-details">
        <TrainingDetails />
      </section>
    </main>
  );
};

export default HistoryDetails;
