
import { useState } from 'react'
import calcularSorvete from '../../services/calcularSorvete';
import './index.css'


export default function Index() {

    const [gramas, setGramas] = useState();
    const [resposta, setResposta] = useState();

    function calcularClick() {
        const tot = calcularSorvete(gramas);
        setResposta(tot);
    }

    return (
        <main>
            <h3> Exercicio 3 </h3>

            <div>
                <p> Quantidade de gramas </p>
                <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} />

                <button onClick={calcularClick}> calcular</button>

                <div>
                    <span>O total à pagar é R$ {resposta}  </span>
                </div>
            </div>
        </main>
    )
}