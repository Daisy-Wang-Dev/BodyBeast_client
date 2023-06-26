import "./TrainingDetails.scss";

const TrainingDetails = ({ historyDetails }) => {
  const { name, created_at, exercises } = historyDetails;
  return (
    <article className="history-details__card">
      <div className="history-details__title-container">
        <h1 className="history-details__title">{name}</h1>
        <h2 className="history-details__date">{created_at}</h2>
      </div>
      {exercises.map((exercise, index) => (
        <div key={index} className="history-details__exercise-container">
          <h2 className="history-details__exercise">
            {exercise.exercise_name}
          </h2>
          <div className="history-details__container">
            <h4 className="history-details__table-header">weight</h4>
            <h4 className="history-details__table-header">rep</h4>
            <h4 className="history-details__table-header">volume</h4>
          </div>
          {exercise.sets.map((set, idx) => (
            <div key={idx} className="history-details__data">
              <p className="history-details__table-header">{set.weight}</p>
              <p className="history-details__table-header">{set.rep}</p>
              <p className="history-details__table-header">{set.volume}</p>
            </div>
          ))}
        </div>
      ))}

    </article>
  );
};

export default TrainingDetails;
