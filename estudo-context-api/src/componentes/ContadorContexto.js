import React, { useState, createContext } from "react";

export const ContadorContexto = createContext();

export function ContadorProvider(props) {
    const [contagem, setContagem] = useState(0);

    return <ContadorContexto.Provider value={[contagem, setContagem]}>{props.children}</ContadorContexto.Provider>;
}

/* 
Aqui fica centralizado o meu estado e pode ser compartilhado/usado pelos filhos sem 
a importacao via props. Tem que utilizar o provider que é o provedor do contexto para os componentes filhos
Basta utilizar o hooks de useContext nos filhos
*/
