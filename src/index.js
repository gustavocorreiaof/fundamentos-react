import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro';
import Segundo from './components/basicos/ComponenteComParametro';


ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <hr></hr>
        <Segundo 
            titulo="Area de Teste" 
            subtitulo="Segundo Componente com conteudos enviados do Index.js">
        </Segundo>
    </div>, 
    document.getElementById("root")
)