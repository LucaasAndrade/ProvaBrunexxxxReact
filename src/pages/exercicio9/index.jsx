
import { useEffect, useState } from 'react'
import { intervalos } from '../../services/intervalos';
import './index.scss'


export default function Index() {

    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(10);
    const [resp, setResp] = useState([])

    function calcular() {
        let a = intervalos  (inicio, fim);
        setResp(a);
    }

    useEffect(() => {
        calcular()
    }, [inicio, fim])

    return (
        <main>
            <h2> Exercicio 9</h2>

            <div>
                <label> Inicio: </label>
                <input type='number' value={inicio} onChange={e => setInicio(Number(e.target.value))} />

                <label> Fim: </label>
                <input type='number' value={fim} onChange={e => setFim(Number(e.target.value))} />
            
            </div>

            <div>
                {resp.map(item => 
                    <h2> {item} </h2>
                    )}
            </div>
        </main>
    )
}