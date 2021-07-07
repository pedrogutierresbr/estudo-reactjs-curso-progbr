const redux = require("redux");
const createStore = redux.createStore;

// Criando actions
const incrementAction = (value) => {
    return { type: "INCREMENT", payload: value || 1 };
};
const decrementAction = (value) => {
    return { type: "DECREMENT", payload: value || 1 };
};

// Criando Reducer
function counterReducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;

        case "DECREMENT":
            return state - action.payload;

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
store.dispatch(incrementAction());
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(4));
store.dispatch(incrementAction(2));
