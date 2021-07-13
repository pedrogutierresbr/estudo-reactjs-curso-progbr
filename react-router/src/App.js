import "./App.css";
import React from "react";

import Home from "./components/Home";
import Aula from "./components/Aula";
import Aulas from "./components/Aulas";
import Nav from "./components/Nav";
import Sobre from "./components/Sobre";
import Assistir from "./components/Assistir";

// BrowserRouter --> responsavel por gerenciar as rotas e saber o que cada uma deve fazer
// Route --> Componente responsavel por criar uma rota
// Switch --> Verifica as rotas e a primeira vez que encontrar uma rota que encaixe com o path ele não olha mais o resto, não mostra mais nada
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/sobre">
                        <Sobre />
                    </Route>
                    <Route path="/aulas/:id">
                        <Aula />
                    </Route>
                    <Route path="/aulas">
                        <Aulas />
                    </Route>
                    <Route path="/assistir">
                        <Assistir />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
