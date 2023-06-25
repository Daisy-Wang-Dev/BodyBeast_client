import "./HistoryCard.scss";
import ChevronIcon from "../../assets/icons/chevron.svg";
import { Link } from "react-router-dom";


const HistoryCard = () => {
  return (
    <article className="history">
      <div className="history__title-container">
        <h2 className="history__title">title</h2>
        <h3 className="history__date">date</h3>
      </div>
      <Link to="" className="history__link">
        <img className="history__icon" src={ChevronIcon} alt="Link to see history details" />
      </Link>

    </article>
  );
};

export default HistoryCard;
