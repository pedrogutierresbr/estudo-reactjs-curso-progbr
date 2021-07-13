import React from "react";

export default function Nav(props) {
    return (
        <div className="nav">
            <h1>Pedro Br</h1>
            <ul className="nav-links">
                <a href="/">
                    <li>Aulas</li>
                </a>
                <a href="/">
                    <li>Sobre</li>
                </a>
            </ul>
        </div>
    );
}
