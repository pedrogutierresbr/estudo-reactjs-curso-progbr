const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const fetch = require("node-fetch");

//Estado em forma default
const initialState = [{ id: 0, title: "Tarefa", completed: false }];

//Action
const addItem = (item) => {
    return { type: "ADD_ITEM", payload: item };
};

//Action com o redux-thunk
const loadItemAndAdd = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((json) => {
                dispatch(addItem(json));
            });
    };
};

//Reducer
const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];

        default:
            return state;
    }
};

//Store -- Para usar o thunk precisa inserir o Middleware
const store = createStore(ListReducer, applyMiddleware(thunk));

//Imprimi estado inicial
console.log(store.getState());

//Imprime mudança de estado
store.subscribe(() => {
    console.log(store.getState());
});

//Executando o dispatch, levando a action para o reducer
store.dispatch(loadItemAndAdd());
