import React, { useContext } from "react";
import { ContadorContexto } from "./ContadorContexto";

function Cabecalho(props) {
    const [contagem, setContagem] = useContext(ContadorContexto);
    return (
        <div className="cabecalho">
            <h3>Contador</h3>
            <div>{contagem}</div>
        </div>
    );
}

export default Cabecalho;

/* 
Para ter acesso ao extado criado, basta importalo pelo hooks de useContext e passar 
o contexto criado criado entre (). Lembre-se de importar o contexto la no import....
*/
