const redux = require("redux");
const createStore = redux.createStore;

// Criando actions
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

// Criando Reducer
function counterReducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;

        default:
            return state;
    }
}

// Criando a Store
const store = createStore(counterReducer);
console.log(store.getState()); // nessa linha ele imprimi o estado incial

// Sempre que algo no meu store mudar, eu imprimo a mudança na tela
store.subscribe(() => {
    console.log(store.getState());
});

// Aqui ele faz a função de dispatch, leva a ação até o reducer (o garçom fazendo analogia ao exemplo do restaurante)
store.dispatch(decrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
