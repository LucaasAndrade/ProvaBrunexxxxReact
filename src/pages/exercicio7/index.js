import { useState } from "react";
import calcularGastos from "../../services/ganhos";

export default function Index(){
    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [Resposta, setResposta] = useState('');

    function calcularClick(){
        const resp = calcularGastos(ganhos, gastos)
        setResposta(resp);
    }

return(
    <main>

    <h3>Exercício 7</h3>
    <div>
    <p>Ganhos</p>
        <input type='Number' value={ganhos} onChange={e => setGanhos(Number(e.target.value))}/>

    <p>Gastos</p>
        <input type= 'Number' value={gastos} onChange={e => setGastos(Number(e.target.value))}/>

    <button onClick={calcularClick}>Calcular Gastos </button>
    </div>

    <div>
        <span> {Resposta}</span>
    </div>
</main>
    )
}