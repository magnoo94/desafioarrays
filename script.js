const numero = prompt("Ingrese una lista de numero separados por una coma");



const arr = numero.split(',').map(Element => {
    return Number(Element)
})

const average = arr.reduce((a, b) => a + b) / arr.length;
const min = Math.min(...arr)
const max = Math.max(...arr)
const range = max - min;

alert(`Valores: ${arr.toString()}\nPromedio: ${average}\nMinimo: ${min}\nMaximo: ${max}\nRango: ${range}`)


