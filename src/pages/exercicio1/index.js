
import './index.css'
import { useState,  } from 'react';
import calcularAcai from '../../services/calcularAcai';

export default function Index() {
    const [QTDp, setQTDp ] = useState(0);
    const [ QTDm, setQTDm ] = useState(0);
    const [ QTDg, setQTDg ] = useState(0);
    const [Desconto, setDesconto] = useState(0);
    const [resposta, setResposta] = useState();
    
    function calcularClick() {
        const calc = calcularAcai(QTDp, QTDm, QTDg, Desconto)
        setResposta(calc)
    }

    return (
        <main>
            <h3> Exercicio 1 </h3>

            <p> Quantidade de pequenos</p>
            <input type='Number' value={QTDp} onChange={e => setQTDp(Number(e.target.value))} />
            
            <p>Quantidade de medios</p>
            <input type='Number' value={ QTDm}  onChange={e=> setQTDm(Number(e.target.value))}/>
            
            <p>Quantidade de grandes</p>
            <input type='Number' value={QTDg} onChange={e => setQTDg(Number(e.target.value))} />
            
            <p>Desconto</p>
            <input type='Number' value={ Desconto} onChange={e => setDesconto(Number(e.target.value))} />

            <button onClick={calcularClick} > calcular </button>
            <div>
            <span> {resposta} </span>
            </div>
        </main>
    )
}