
import './index.css'
import { useState,  } from 'react';

export default function Index() {
    const [QTDp, setQTDp ] = useState();
    const [ QTDm, setQTDm ] = useState();
    const [ QTDg, setQTDg ] = useState();
    const [Desconto, setDesconto] = useState();
    const [resposta, setResposta] = useState();
    
    function calcular(pequenos, medios, grandes, porcentagem) { 
        pequenos = pequenos * 13.50;
        medios = medios * 15;
        grandes = grandes * 17.50;

        const subTotal = pequenos + medios + grandes;
        const valor = subTotal * (porcentagem / 100)
        const total = subTotal - valor;
        
        return `Total à pagar R$ ${total}`; 
    }

    function calcularClick() {
        const calc = calcular(QTDp, QTDm, QTDg, Desconto)
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