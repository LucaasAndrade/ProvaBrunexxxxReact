import { useState } from "react"

export default function Index(){
    const [Tamanho, setTamanho] = useState([]);


    return (
        <main>
            <h3>Exercicio10</h3>

                <p>Implemente um programa em React/js que escreva no browser a forma de uma 
                    linha, a partir da quantidade  de pontos que a compõe informada pelo usuário:</p>

                    <p>Informe o tamanho da linha</p>
                        <input type='Number'/>
                    <button>Criar linha</button>

            <div>
                <span></span>
            </div>


        </main>
    )
}