import { useEffect, useState } from "react"
import { linha } from "../../services/tamanhoLinha";

export default function Index(){
    const [limite, setLimite] = useState(0);
    const [resp, setResp] = useState([]);

    function desenharLinha() {
        const a = linha(limite);
        setResp(a);
    }

    useEffect(() => {
        desenharLinha()
    }, [limite]);

    return (
        <main>
            <div className="enunciado">
                <h2> Exercicio10</h2>

                <h5> Implemente um programa em React Js que escreva no browser a forma de um linha, a partir de uma linha, a partir da quantidade de pontos que compõem, informada pelo usuário.</h5>
            </div>
            <div>
                <label> Insira um limite para a linha: </label>
                <input type='number' value={limite} onChange={e => setLimite(Number(e.target.value))} />
            </div>
            <span> {resp.map(item => 
                <label> {item} </label>
                )}</span>
        </main>
    )
}