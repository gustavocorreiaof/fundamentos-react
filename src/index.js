import ReactDOM from 'react-dom';
import './index.css'
import './App.css'
import Random from './components/Basicos/Aleatorio'
import Card from './components/Layout/Card'
import Primeiro from './components/Basicos/Primeiro';
import Segundo from './components/Basicos/ComponenteComParametro';
import Fragmento from './components/Basicos/ReactFragment';

ReactDOM.render(
    <div id='Exercicios'>
       
        <Card title="Nessa area será gerado um numero aleatorio:">
            <Random max = {100} min ={1}></Random>
        </Card>

        <Card title="Primeiro Exercicio">
            <Primeiro>

            </Primeiro>
        </Card>

        <Card title="Componente Com Parametro">
            <Segundo titulo="Miras" subtitulo="Sem Morales"></Segundo>
        </Card>

        <Card title="Componentes com Fragmentos">
            <Fragmento></Fragmento>
        </Card>
    </div>,
    document.getElementById("root")
)