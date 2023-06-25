import "./History.scss";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [histories, setHistories] = useState(null);

  const getHistories = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/user/1/history"
      );
      console.log(response.data);
      setHistories(response.data);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    getHistories();
  }, []);

  if (!histories) {
    return;
  }

  return (
    <main>
      <section className="histories">
        <h1 className="histories__title">HISTROY</h1>
        {histories.map((history) => (
          <HistoryCard key={history.id} history={history} />
        ))}
      </section>
    </main>
  );
};

export default History;
