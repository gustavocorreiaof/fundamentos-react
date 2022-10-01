import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'
import Primeiro from './components/basicos/Primeiro';
import Segundo from './components/basicos/ComponenteComParametro';
import Fragmento from './components/basicos/ReactFragment';


ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <hr></hr>
        <Segundo 
            titulo="Area de Teste" 
            subtitulo="Segundo Componente com conteudos enviados do Index.js">
        </Segundo>
        <Fragmento></Fragmento>
    </div>, 
    document.getElementById("root")
)