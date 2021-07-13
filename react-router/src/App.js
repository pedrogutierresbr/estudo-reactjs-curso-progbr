import "./App.css";
import React from "react";

import Home from "./components/Home";
import Aulas from "./components/Aulas";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";

// BrowserRouter --> responsavel por gerenciar as rotas e saber o que cada uma deve fazer
// Route --> Componente responsavel por criar uma rota
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/aulas">
                    <Aulas />
                </Route>
                <Route path="/sobre">
                    <Sobre />
                </Route>
            </div>
        </Router>
    );
}

export default App;
