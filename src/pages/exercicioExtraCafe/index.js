import { useState } from "react"
import calcularLitros from "../../services/contandoLitros";

export default function Index(){

    const [Matriculados, setMatriculados] = useState(0);
    const [Litros, setLitros] = useState(0);
    const [Bebem, setBebem] = useState(0);
    const [Resposta,setResposta] = useState('')

    function litrosClick(){
        const resp = calcularLitros(Matriculados, Litros, Bebem)
        setResposta(resp)
    }


    return(
        <main>

            <h3>Exercício Extra: CAFÉÉÉ</h3>

            <p>Informe o número de alunos matriculados(N)</p>
                <input type='Number' value={Matriculados} onChange={e => setMatriculados(Number(e.target.value))}/>

            <p>Informe o número de litros produzidos pelo professor Bruno (L)</p>
                <input type='Number' value={Litros} onChange={e => setLitros(Number(e.target.value))}/> 

            <p> Informe a quantidade de mililítros que cada estudante bebe de café (D)</p>
                <input type='Number' value={Bebem} onChange={e => setBebem(Number(e.target.value))}/>
        
            <button onClick={litrosClick}>calcular Litros</button>

            <span>{Resposta}</span>
        </main>

    )
}