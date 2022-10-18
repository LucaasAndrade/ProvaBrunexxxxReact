import { useState } from "react"
import calcularIngressos from "../../services/ingressoCinema";

export default function Index(){
    const [Inteira, setInteira] = useState(0);
    const [Meia, setMeia] = useState(0);
    const [Nacional, setNacional] = useState('');
    const [DiaSemana, setDiaSemana] = useState('');
    const [Resposta, setResposta] = useState('');

    function IngressoClick(){
        const resp = calcularIngressos(Inteira, Meia, Nacional, DiaSemana)
        setResposta(resp);
    }

    return (
        <main>
            <h3>Exercício 8</h3>

            <div>
                <p>Qtd. Ingressos Inteiras</p>
                    <input type='Number' value={Inteira} onChange={e => setInteira(Number(e.target.value))}/>

                <p>Qtd. Ingressos Meias</p>
                    <input type='Number' value={Meia} onChange={e => setMeia(Number(e.target.value))}/>

                <p>Filme Brasileiro?</p>
                    <input type='Checkbox' value={Nacional} onChange={e => setNacional(e.target.checked)}/>

                <p>Dia da Semana</p>
                    <input type ='Text' value={DiaSemana} onChange={e => setDiaSemana(e.target.value)}/>        
                
                <button onClick={IngressoClick}> Calcular Ingressos</button>
            </div>

            <div>
                <span> {Resposta}</span>
            </div>
        </main>
    )
}