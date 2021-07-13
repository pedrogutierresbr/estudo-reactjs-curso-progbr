import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Assistir(props) {
    const query = useQuery();

    useEffect(() => {
        console.log(query.get("v"));
    });

    return (
        <div className="page">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${query.get("v")}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
}

// Aula ensinando como acessar os parametros do location, para melhor entendimento veja a videoaula no curso
