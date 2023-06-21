import "./MenuBar.scss";
import ClockIcon from "../../assets/icons/clock.svg";
import MuscleIcon from "../../assets/icons/muscle.svg";
import StatIcon from "../../assets/icons/stat.svg";
import SettingIcon from "../../assets/icons/setting.svg";
import { Link, useLocation } from "react-router-dom";

const MenuBar = () => {
    const location = useLocation();

  return (
    <section className="menu">
      <Link to="/setting" className={"menu__link"}>
        <img className={`menu__icon ${
              location.pathname === "/setting" ? "menu__icon--active" : ""
            }`} src={SettingIcon} alt="setting" />
        <h3 className={`menu__info ${
              location.pathname === "/setting" ? "menu__info--active" : ""
            }`}>SETTING</h3>
      </Link>
      <Link to="/" className="menu__link">
        <img className={`menu__icon ${
              location.pathname === "/" ? "menu__icon--active" : ""
            }`} src={StatIcon} alt="Performance stat" />
        <h3 className={`menu__info ${
              location.pathname === "/" ? "menu__info--active" : ""
            }`}>STATS</h3>
      </Link>
      <Link to="/routines" className={"menu__link"}>
        <img className={`menu__icon ${
              location.pathname === "/routines" ? "menu__icon--active" : ""
            }`} src={MuscleIcon} alt="Train" />
        <h3 className={`menu__info ${
              location.pathname === "/routines" ? "menu__info--active" : ""
            }`}>TRAIN</h3>
      </Link>
      <Link to="/histories" className="menu__link">
        <img className={`menu__icon ${
              location.pathname === "/histories" ? "menu__icon--active" : ""
            }`} src={ClockIcon} alt="Training history" />
        <h3 className={`menu__info ${
              location.pathname === "/histories" ? "menu__info--active" : ""
            }`}>HISTORY</h3>
      </Link>
    </section>
  );
};

export default MenuBar;
