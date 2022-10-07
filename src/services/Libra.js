


export default function verificarLibra(M, D) {
    if (M == 'Setembro' && D >= 23 || M == 'Outubro' && D <= 22) {
        return 'Sim'
    }
    else {
        return 'Não'
    }
}
