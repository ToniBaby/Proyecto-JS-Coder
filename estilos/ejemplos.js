const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100},
                  {  id: 5,  nombre: "Helado" , precio: 200},
                  {  id: 6,  nombre: "Coca Cola" , precio: 900}
                  ];

campoCantidad.value = productos.length;

function sumarTotal(listaPrecios) {
    let total = 0;
    for (let precio of listaPrecios) {
        //total = total + precio;
        total += precio;
    }
    return total;
}

function calcularDescuento(totalPrecios, descuento) {
    return totalPrecios * descuento;
}

const totalConDescuento = calcularDescuento(sumarTotal(preciosProductos), 0.8);
console.log('El total con descuento es $' + totalConDescuento);