import React from "react";
import Contador from "./componentes/Contador";
import Cabecalho from "./componentes/Cabecalho";
import "./App.css";
import { createStore } from "redux";
import contadorReducer from "./reducers/contadorReducer";
import { Provider } from "react-redux";

function App() {
    const store = createStore(contadorReducer);

    return (
        <div className="App">
            <Provider store={store}>
                <Cabecalho></Cabecalho>
                <Contador></Contador>
            </Provider>
        </div>
    );
}

export default App;
