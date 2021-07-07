const redux = require("redux");
const createStore = redux.createStore; // 'use quando tiver apenas um estado'
const combineReducers = redux.combineReducers; //'use quando tiver mais de um estado'

// Importando actions do contador e lista
const { incrementAction, decrementAction } = require("./actions/CounterActions");
const { addItemAction } = require("./actions/ListActions");

// Importando redurcers do contador e lista
const counterReducer = require("./reducers/CounterReducer"); //Nos arquivos separados eu fiz um com function e outro com arrow function para mostrar que é possivel. Dentro de um projeto, mantenha um padrao, escolha um e use sempre ele
const listReducer = require("./reducers/ListReducer");

//Criando objeto para receber mais de um reducer
const allReducers = combineReducers({
    counter: counterReducer,
    list: listReducer,
});

//criando a Store
const store = createStore(allReducers);
console.log(store.getState()); // nessa linha ele imprimi o estado incial

// Sempre que algo no meu store mudar, eu imprimo a mudança na tela
store.subscribe(() => {
    console.log(store.getState()); //posso imprimir sem ser em formato de objeto, basta colocar qual voce quer. Ex: console.log(store.getState().counter) || console.log(store.getState().list)
});

// Aqui ele faz a função de dispatch, leva a ação até o reducer (o garçom fazendo analogia ao exemplo do restaurante)
store.dispatch(addItemAction("item 1"));
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(4));
store.dispatch(incrementAction(2));
store.dispatch(addItemAction("item 2"));
