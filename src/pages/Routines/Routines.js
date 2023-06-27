import "./Routines.scss";
import RoutineList from "../../components/RoutineList/RoutineList";
import { Link } from "react-router-dom";

const Routines = () => {
  return (
    <main>
      <section className="routines">
        <div className="routines__title-container">
          <h1 className="routines__title">ROUTINES</h1>
          <Link to="/routines/new">
            <h3 className="routines__add">+ NEW</h3>
          </Link>
        </div>
        <div className="routines__cards">
          <RoutineList />
        </div>
      </section>
    </main>
  );
};

export default Routines;
