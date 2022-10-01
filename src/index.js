import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import Random from './components/basicos/Aleatorio'

ReactDOM.render(
    <div>
        <Random max = {10} min ={0}></Random>
    </div>,
    document.getElementById("root")
)