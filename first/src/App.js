import React from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
    return <Header name="Pedro Br" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>;
}

export default App;
