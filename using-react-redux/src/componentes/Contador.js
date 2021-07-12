import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Contador(props) {
    const contador = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();

    return (
        <div>
            <div>{contador}</div>
            <button
                onClick={() => {
                    dispatch({ type: "DECREMENT" });
                }}
            >
                -
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                }}
            >
                +
            </button>
        </div>
    );
}

export default Contador;
