import { useParams } from "react-router-dom";
import "./HistoryDetails.scss";
import TrainingDetails from "../../components/TrainingDetails/TrainingDetails";
import { useEffect, useState } from "react";
import axios from "axios";

const HistoryDetails = () => {
  const { routineId } = useParams();

  const [historyDetails, setHistoryDetails] = useState(null);

  const getHistoryDetails = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `/user/1/history/${routineId}`
      );
      setHistoryDetails(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    getHistoryDetails();
  }, []);

  if (!historyDetails) {
    return <h1 className="loading">DATA LOADING...</h1>;
  }

  return (
    <main>
      <section className="history-details">
        <TrainingDetails historyDetails={historyDetails}/>
      </section>
    </main>
  );
};

export default HistoryDetails;
