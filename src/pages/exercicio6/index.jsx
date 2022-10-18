import './index.scss';

import Tabelinha from '../../components/tabela/tabelinha';
import { useEffect, useState } from 'react';
import { classificarTemperatura } from '../../services/classificarTemperatura';

export default function Index() {
    const [temperatura, setTemperatura] = useState(37.5);
    const [resposta, setResposta] = useState("");

    function classificar() {
        const x = classificarTemperatura(temperatura);
        setResposta(x);
    }

    useEffect(() => {
        classificar();
    }, [temperatura])

    return (
        <main className='exercicio6'>
            <div className='enunciado'>
                <h2> Exercicio 6 </h2>

                <h5> Implementar um programa em React Js que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.</h5>
                
                <Tabelinha />
            </div>

            <div>
                <label> Tempertatura Corporal: </label>
                <input type='number' value={temperatura} onChange={e => setTemperatura(Number(e.target.value))} />

                <span> { resposta }</span>
            </div>
        </main>
    )
}