



export function classificarTemperatura(temperatura) {
    if (temperatura >= 41 || temperatura < 36) {
        return "Hipotermia"
    }
    else if (temperatura >= 39.6) {
        return "Febre Alta"
    }
    else if (temperatura >= 37.6) {
        return "Febre"
    }
    else if (temperatura >= 36)
        return "Normal"
}