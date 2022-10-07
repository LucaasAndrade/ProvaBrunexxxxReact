
import { useState } from 'react'
import './index.css'


export default function Index() {

    const [mes, setMes] = useState('');
    const [dia, setDia] = useState();
    const [Result, setResult] = useState();

    function verificar(M, D) {
        if (M == 'Setembro' && D >= 23 || M == 'Outubro' && D <= 22) {
            return 'Sim'
        }
        else {
            return 'Não'
        }
    }

    function verificarClick() {
        const resp = verificar(mes, dia)
        setResult(resp);
    }

    return (
        <main>
            <h3> Exercicio 2 </h3>
            <p>Mês</p>
            <input type='text' value={ mes } onChange={e => setMes (e.target.value)} />

            <p>Dia</p>
            <input type='number' value={ dia }    onChange= {e => setDia (e.target.value)} />

            <button onClick={verificarClick} >Verificar Signo</button>

            <div>
                <span>{`É do signo de Libra?${Result}`}</span>
            </div>
        </main>
    )
}