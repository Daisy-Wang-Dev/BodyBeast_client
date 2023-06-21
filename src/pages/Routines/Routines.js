import "./Routines.scss";
import RoutineList from "../../components/RoutineList/RoutineList";

const Routines = () => {
  return (
    <main>
      <section className="routines">
        <div className="routines__title-container">
          <h1 className="routines__title">ROUTINES</h1>
          <h3 className="routines__add">+ NEW</h3>
        </div>
        <RoutineList />
      </section>
    </main>
  );
};

export default Routines;
