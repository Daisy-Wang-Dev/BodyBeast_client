import "./Routines.scss";
import RoutineList from "../../components/RoutineList/RoutineList";

const Routines = () => {
    return (
        <main>
            <section className="routines">
                <h1 className="routines__title">ROUTINES</h1>
                <RoutineList/>
            </section>
        </main>
    )
}

export default Routines;