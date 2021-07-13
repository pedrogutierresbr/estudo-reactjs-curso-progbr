import data from "../Data";

import { useParams } from "react-router-dom";
import React from "react";

function useAula() {
    const id = useParams().id;
    // eslint-disable-next-line eqeqeq
    return data.filter((aula) => aula.id == id)[0];
}

export default function Aula(props) {
    const aula = useAula();

    return (
        <div className="page">
            <h1>{aula.title}</h1>
            <h3>{aula.desc}</h3>
        </div>
    );
}
