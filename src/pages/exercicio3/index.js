
import { useState } from 'react'
import './index.css'


export default function Index() {

    const [gramas, setGramas] = useState();
    const [resposta, setResposta] = useState();

    function calcular(qtd) {
        if (qtd <= 0 || qtd == undefined)
            return 'Preço Inválido'
        let preco = 3.5
        if (qtd >= 1000) {
            preco = 3    
        }
        return preco * (qtd / 100)
    }

    function calcularClick() {
        const tot = calcular(gramas);
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
                    <span> {resposta} </span>
                </div>
            </div>
        </main>
    )
}