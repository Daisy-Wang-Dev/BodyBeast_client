import { useEffect, useState } from "react";
import "./RoutineList.scss";
import { Link } from "react-router-dom";


const RoutineList = () => {
   
    return ( 
    <article className="routine">
        <h2 className="routine__title">title</h2>
        <Link className="routine__btn">START</Link>

    </article>

    )
}

export default RoutineList;