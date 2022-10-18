import './index.scss'


export default function Tabelinha() {
    return (
        <main>
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
                            Hipotermia
                        </td>
                    </tr>
                </table>
        </main>
    )
}