export default function calcularLitros(N, L, D){
    let litros = D /1000
    let total = litros * N

   while(total > L){
    L = L+L
   }
return L
}