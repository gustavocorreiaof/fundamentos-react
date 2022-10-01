import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import Random from './components/Basicos/Aleatorio'
import Card from './components/Layout/Card'

ReactDOM.render(
    <div>
       
        <Card title="Nessa area será gerado um numero aleatorio:">
            <Random max = {100} min ={1}></Random>
        </Card>
    </div>,
    document.getElementById("root")
)