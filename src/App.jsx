import React from "react";
import Primeiro from './components/Basicos/Primeiro';
import Segundo from './components/Basicos/ComponenteComParametro';
import Fragmento from './components/Basicos/ReactFragment';

export default function App(props){
    return(
        <div id='app'>
            <Primeiro></Primeiro>
            <hr></hr>
            <Segundo 
                titulo="Area de Teste" 
                subtitulo="Segundo Componente com conteudos enviados do Index.js">
            </Segundo>
            <Fragmento></Fragmento>
        </div>
    )
}