import React, { useState, useContext } from "react";
import { ContadorContexto } from "./ContadorContexto";

function Contador(props) {
    const [contagem, setContagem] = useContext(ContadorContexto);

    return (
        <div>
            <div>{contagem}</div>
            <button
                onClick={() => {
                    setContagem((anterior) => anterior - 1);
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    setContagem((anterior) => anterior + 1);
                }}
            >
                +
            </button>
        </div>
    );
}

export default Contador;

/* 
Para ter acesso ao extado criado, basta importalo pelo hooks de useContext e passar 
o contexto criado criado entre (). Lembre-se de importar o contexto la no import....
*/
