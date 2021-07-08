# Anotações sobre REACT JS curso geek university

## Criando projeto REACT

Terminal

```
cd <pasta de destino>

npx create-react-app <nome do projeto>

npm start
```

## Build no React (fazer isso somente quando tiver que exportar para o servidor/hospedagem)

1. Tenha o domínio ja feito

2. No arquivo package.json adicione uma nova propriedade/atributo:
   2.2 "homepage": " < seu dominio aqui > ",

3. No terminal

```terminal
npm run build

ou

yarn build
```

4. Uma pasta build sera criada e nela estaram todos os arquivos necessários que devem ser submetidos ao local de hospedagem. O restante é de area do desenvolvedor e se quiser pode ser apagado

### Códigos de status de respostas HTTP

-   Respostas de informação (100-199)

-   Respostas de sucesso (200-299)

-   Redirecionamentos (300-399)

-   Erros do cliente (400-499)

-   Erros do servidor (500-599)

## Métrodos de Ciclo de Vida

![Desktop Layout](https://github.com/pedrogutierresbr/reactjs-curso-progbr/blob/main/1.imagesToReadme/Diagrama+do+Ciclo+de+Vida.png?raw=true)

### Principais Hooks disponíveis

-   Hooks Básicos

    -   useState() -----------------------------(equivalente ao gerenciamento de estado do componente)
    -   useEffect() ----------------------------(equivalente ao componentDidMount/componentDidUpdate/componentWillUnmount)
    -   useContext()

-   Hooks Adicionais
    -   useReducer()
    -   useCallback()
    -   useMemo()
    -   useRef()
    -   useImperativeHandle()
    -   useLayoutEffect()

## Redux

Redux é um container para controle e gerenciamento de estado global de aplicações JavaScript baseado na arquitetura Flux (tem o propósito de solucionar o problema de compartilhamento de estados entre componentes, tornando-o unidirecional). Redux é uma solução para compartilhamento de estados entre vários componentes diferentes, tornando isso muito fácil, previsível e rápido.

[Para ler a respeito](https://blog.geekhunter.com.br/redux-um-tutorial-pratico-e-simples/)

![Desktop Layout](https://github.com/pedrogutierresbr/reactjs-curso-progbr/blob/main/1.imagesToReadme/problem-solution-redux.png?raw=true)

![Desktop Layout](https://github.com/pedrogutierresbr/reactjs-curso-progbr/blob/main/1.imagesToReadme/redux_flow.jpg?raw=true)

```terminal
npm install redux
```

## redux-thunk

Por padrão, as ações do Redux são enviadas de forma síncrona, o que é um problema para todos os aplicativos não triviais que precisam se comunicar com uma API externa ou executar efeitos colaterais. O Redux também permite que middleware fique entre uma ação sendo despachada e a ação que atinge os redutores.

Thunk (conversão) é um conceito de programação onde uma função é usada para atrasar a avaliação/cálculo de uma operação.

O Redux Thunk é um middleware que permite chamar criadores de ação que retornam uma função em vez de um objeto de ação. Essa função recebe o método de expedição do armazenamento, que é usado então para expedir ações síncronas regulares dentro do corpo da função assim que as operações assíncronas forem concluídas.

O caso de uso mais comum para o Redux Thunk é para se comunicar de forma assíncrona com uma API externa para recuperar ou salvar dados. O Redux Thunk torna mais fácil expedir ações que seguem o ciclo de vida de uma solicitação para uma API externa.

Criar um novo item de tarefa pendente normalmente envolve primeiro expedir uma ação para indicar que a criação de um item de tarefa pendente foi iniciado. Em seguida, se o item de tarefa for criado com sucesso e retornado pelo servidor externo, expedindo outra ação com o novo item de tarefa. Caso aconteça um erro e a tarefa não seja salva no servidor, uma ação com o erro pode ser expedida em vez disso.

[Para ler a respeito](https://www.digitalocean.com/community/tutorials/redux-redux-thunk-pt)

_Veja a palicação como exemplo_

```terminal
npm install redux

npm install redux-thunk

npm install node-fetch --> como estamos usando o node para rodas a aplicação é necessário intallar o fetch. Quando usado com o reactjs não precisa
```

```javascript
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const fetch = require("node-fetch");

//Store -- Para usar o thunk precisa inserir o Middleware
const store = createStore(ListReducer, applyMiddleware(thunk));
```
