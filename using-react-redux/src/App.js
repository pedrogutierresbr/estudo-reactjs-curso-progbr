import React from "react";
import Contador from "./componentes/Contador";
import Cabecalho from "./componentes/Cabecalho";
import { ContadorProvider } from "./componentes/ContadorContexto";
import "./App.css";

function App() {
    return (
        <div className="App">
            <ContadorProvider>
                <Cabecalho></Cabecalho>
                <Contador></Contador>
            </ContadorProvider>
        </div>
    );
}

export default App;
