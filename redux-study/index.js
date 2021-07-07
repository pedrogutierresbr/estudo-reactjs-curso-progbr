const redux = require("redux");
const createStore = redux.createStore; // 'use quando tiver apenas um estado'
const combineReducers = redux.combineReducers; //'use quando tiver mais de um estado'

// Criando actions e reducer para o contador

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

// // Criando a Store
// const store = createStore(counterReducer);
// console.log(store.getState()); // nessa linha ele imprimi o estado incial

// // Sempre que algo no meu store mudar, eu imprimo a mudança na tela
// store.subscribe(() => {
//     console.log(store.getState());
// });

// // Aqui ele faz a função de dispatch, leva a ação até o reducer (o garçom fazendo analogia ao exemplo do restaurante)
// store.dispatch(incrementAction());
// store.dispatch(incrementAction(1));
// store.dispatch(incrementAction(4));
// store.dispatch(incrementAction(2));

//=====================================================================

// Criando actions e reducer para a lista

// Criando actions
const addItemAction = (item) => {
    return { type: "ADD_ITEM", payload: item };
};

// Criando Reducer
const listReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];

        default:
            return state;
    }
};

//Criando objeto para receber mais de um reducer
const allReducers = combineReducers({
    counter: counterReducer,
    list: listReducer,
});

const store = createStore(allReducers);
console.log(store.getState()); // nessa linha ele imprimi o estado incial

// Sempre que algo no meu store mudar, eu imprimo a mudança na tela
store.subscribe(() => {
    console.log(store.getState());
});

// Aqui ele faz a função de dispatch, leva a ação até o reducer (o garçom fazendo analogia ao exemplo do restaurante)
store.dispatch(addItemAction("item 1"));
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(4));
store.dispatch(incrementAction(2));
