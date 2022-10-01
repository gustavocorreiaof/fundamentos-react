import React from "react";

export default function Fragmento(props){
    return (

        // Caso nao queria que o retorno JSX seja devolvido de forma a estar dentro de uma tag
        // basta usar o React.Fragment ou ate mesmo uma tag fazia que ainda sim faz referencia ao mesmo
        // <><></> assim seus elementos serão inseridos no HTML sem ter tags

        <>
            <h2>Fragmento Mensagem padrão de erro.</h2>
        </>
    )
}