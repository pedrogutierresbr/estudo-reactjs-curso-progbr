import React, { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(props.count);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increase}>ADD</button>
            <button onClick={decrease}>DEL</button>
        </div>
    );
}

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = { count: 0 };
//         this.add = this.add.bind(this); //aqui eu dou o contexto pro meu metodo add
//         this.decrease = this.decrease.bind(this); //aqui eu dou o contexto pro meu metodo decrease
//     }

//     add() {
//         this.setState(
//             (state) => {
//                 return { count: state.count + 1 };
//             },
//             () => {
//                 localStorage.setItem("state", JSON.stringify(this.state));
//             }
//         );
//     }

//     decrease() {
//         this.setState(
//             (deletar) => {
//                 return { count: deletar.count - 1 };
//             },
//             () => {
//                 localStorage.setItem("state", JSON.stringify(this.state));
//             }
//         );
//     }

//     componentDidMount() {
//         this.setState(JSON.parse(localStorage.getItem("state")));
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.add}>ADD</button>
//                 <button onClick={this.decrease}>DEL</button>
//             </div>
//         );
//     }
// }

export default Counter;
