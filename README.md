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

## Redux Flow

![Desktop Layout](https://github.com/pedrogutierresbr/reactjs-curso-progbr/blob/main/1.imagesToReadme/redux_flow.jpg?raw=true)
