import React from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import "./App.css";

function App() {
    return (
        <div>
            <Header name="Pedro Br" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>;
            <Counter count={8}></Counter>
        </div>
    );
}

export default App;
