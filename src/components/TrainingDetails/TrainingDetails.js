import "./TrainingDetails.scss";

const TrainingDetails = () => {
  return (
    <article className="history-details__card">
      <div className="history-details__title-container">
        <h1 className="history-details__title">title</h1>
        <h2 className="history-details__date">date</h2>
      </div> 
      {/* use  map here */}
      <div className="history-details__exercise-container">
        <h2 className="history-details__exercise">exercisename</h2>
        <div className="history-details__container">
          <h4 className="history-details__table-header">weight</h4>
          <h4 className="history-details__table-header">rep</h4>
          <h4 className="history-details__table-header">volume</h4>

        </div>
        {/* use .map here */}

      </div>

    </article>
  );
};

export default TrainingDetails;
