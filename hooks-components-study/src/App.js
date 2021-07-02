import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import "./App.css";

function App() {
    const [show, setShow] = useState(true);

    let time = 0;

    useEffect(() => {
        let timer = setInterval(() => {
            time++;
            console.log(time);
            if (time >= 10) {
                clearInterval(timer);
                setShow(false);
            }
        }, 1000);
    }, [time]);

    if (show) {
        return (
            <div>
                <Header name="Pedro Br" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>;
                <Counter count={0}></Counter>
            </div>
        );
    } else {
        return (
            <div>
                <Header name="Pedro Br" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>;
                <h1>O contador não existe mais</h1>
            </div>
        );
    }
}

export default App;
