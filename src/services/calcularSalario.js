

export function calcularSalario(salario, bonus, desconto) {
    bonus = (salario * bonus) / 100;
    return `Seu salário líquido é de R$ ${salario + bonus - desconto}`;
}   