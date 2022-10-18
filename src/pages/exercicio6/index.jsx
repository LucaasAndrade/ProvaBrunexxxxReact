import './index.scss';


export default function index() {


    return (
        <main className='exercicio6'>
            <div className='enunciado'>
                <h2> Exercicio 6 </h2>

                <h5> Implementar um programa em React Js que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.</h5>
                
                <table>
                    <tr>
                        <th>  Média </th>
                        <th>  Situação </th>
                    </tr>
                    <tr>
                        <td>
                            menor igual a 41
                        </td>
                        <td>
                            Hipotermia
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Maior igual a 39,6 e menor que 41
                        </td>
                        <td>
                            Febre Alta
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Maior igual a 37,6 e menor que 39, 6 
                        </td>
                        <td>
                            Febre
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Maior igual a 36 e menor que 37,6
                        </td>
                        <td>
                            Normal
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Abaixo de 36
                        </td>
                        <td>
                            Normal
                        </td>
                    </tr>
                </table>
            </div>
        </main>
    )
}