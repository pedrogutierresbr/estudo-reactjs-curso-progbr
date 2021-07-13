import React from "react";

// Link --> componente que permite a transição de paginas sem a necessidade de recarregamento da mesma, deixa a aplicação mais fluida (SPA)
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <nav className="nav">
            <h1>
                <Link to="/">Pedro BR</Link>
            </h1>
            <ul className="nav-links">
                <li>
                    <Link to="/aulas">Aulas</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/assistir">Assistir</Link>
                </li>
            </ul>
        </nav>
    );
}
