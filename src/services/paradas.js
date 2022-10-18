



export function CalcularParadas(capacidade, consumo, distancia) {
    const calculo = distancia - (capacidade * consumo)
    return calculo / 100
}