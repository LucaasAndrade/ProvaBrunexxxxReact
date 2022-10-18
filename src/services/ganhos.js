export default function calcularGastos(Ganhos, gastos ){
   
    if(gastos <= 0 || Ganhos === undefined )
        return 'Ganhos inválidos'
    
    else if(gastos > Ganhos) {
        return 'Orçamento comprometido! Hora de rever seus gastos'
    }

    else if(gastos >= ((Ganhos/100) * 81) && gastos <= Ganhos)
        return 'Cuidado, seu orçamentopode ficar comprometido!'
    

    else if (gastos >= (Ganhos * 0.51) && gastos <= (Ganhos * 0.80))
        return 'Atenção, melhor conter os gastos!'
    

    else if (gastos >= (Ganhos * 0.21) && gastos <= (Ganhos * 0.50))
        return 'Muito bem, seus gastos não ultrapassaram nem metade dos Ganhos!'

    else if (gastos >= (Ganhos * 0) && gastos <= (Ganhos * 0.20))
        return 'Parabens, está controlando bem seu orçamento!'
    
    
} 