import { useState } from 'react';
import { calcularSalario } from '../../services/calcularSalario';
import './index.scss';


export default function Index() {
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resul, setResul] = useState("");


    function calcularClick() {
        const x = calcularSalario(salario, bonus, desconto);
        setResul(x);
    }

    return (
        <main className='exercicio4'>
            <div className='enunciado'>
                <h2> Exercicio 4 </h2>

                <h5> Implementar um programa em React Js para calcular o salário líquido de um funcionário, a partir de seu salário base, o bonûs mensal em porsentagem e do total de descontos em reais.</h5>
            </div>

            <div className='inputs'>
                <div>
                    <label> Salário Base (R$): </label>
                    <input type='number' value={salario} onChange={e => setSalario(Number(e.target.value))} />
                </div>
                <div>
                    <label> Bonûs Mensal ( em % ): </label>
                    <input type='number' value={bonus} onChange={e => setBonus(Number(e.target.value))} />
                </div>
                <div>
                    <label> Desconto (R$): </label>
                    <input type='number' value={desconto} onChange={e => setDesconto(Number(e.target.value))} />
                </div>

                <button onClick={calcularClick}> Calcular </button>
            </div>
            <span> { resul } </span>
        </main>
    )
}