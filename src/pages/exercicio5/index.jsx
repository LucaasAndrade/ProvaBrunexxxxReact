import { useState } from 'react';
import { CalcularParadas } from '../../services/paradas';
import './index.scss';


export default function Index() {
    const [capacidade, setCapacidade] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [resultado, setResultado] = useState("");

    function calcularClick() {
        const x = CalcularParadas(capacidade, consumo, distancia);
        setResultado(`Você precisará fazer ${x} paradas para abastacer`);
    }

    return (
        <main className='exercicio5'>
            <div>
                <h2> Exercicio 5 </h2>

                <h5> Implementar um programa em React Js que calcule quantas paradas para abastecimeneto são necessárias para realizar uma viagem, a partir da capacidade do tanque de combustível (em litros), do consumo do veículo (KM por litro) e  da distância da viagem (km).</h5>

                <p> * Você deve partir do principio que o tanque está vazio </p>
                <p> * Os valores de entrada devem ser entendidos com decimais </p>
            </div>

            <div>
                <label> Capacidade do tanque de combustível: </label>
                <input type='number' value={capacidade} onChange={e => setCapacidade(Number(e.target.value))} />

                <label> Consumo do veículo: </label>
                <input type='number' value={consumo} onChange={e => setConsumo(Number(e.target.value))} />

                <label> Distância da viagem: </label>
                <input type='number' value={distancia} onChange={e => setDistancia(Number(e.target.value))} />
            </div>

            <div>
                <button onClick={calcularClick}> Calcular </button>
                <span> {resultado} </span>
            </div>
        </main>
    )
}