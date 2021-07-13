import data from "../Data";

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Aula(props) {
    const params = useParams();

    const [aula, setAula] = useState({});

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        setAula(data.filter((aula) => aula.id == params.id)[0]);
    }, [params]);

    return (
        <div className="page">
            <h1>{aula.title}</h1>
            <h3>{aula.desc}</h3>
        </div>
    );
}
