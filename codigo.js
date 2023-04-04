/* 
 
let total = 0;
 
 let compra = prompt ("Desea comprar un producto? (s-si / n-no)");
while(compra == "s" || compra == "S"){
    let producto = prompt("1- PC-Gamer $ 180000 \n2- Silla-Gamer $ 80000 \n3- Auriculares-Xpro $ 16000 \n4- Teclado-Xpro $ 12000 \n5- Moouse-Xpro $ 10000 \n6- Monitor $ 50000 ");
      switch(producto){
        case "1":
            alert("Agregaste PC-Gamer al carro ... $ 180000 ");
            incrementarTotal(180000)
            break;
        case "2":
            alert("Agregaste Silla-Gamer ... $ 80000 ");
            incrementarTotal(80000)
            break;        
        case "3":
            alert("Agregaste Auriculares-Xpro ... $ 16000 ");
            incrementarTotal(16000)
            break;  
        case "4":
            alert("Agregaste Teclado-Xpro ... $ 12000 ");
            incrementarTotal(12000)
            break;
        case "5":
            alert("Agregaste Moouse-Xpro ... $ 10000 ");
            incrementarTotal(10000)
            break;        
        case "6":
            alert("Agregaste Monitor ... $ 50000 ");
            incrementarTotal(50000)
            break;  
        default:
            alert("Codigo inexistente");
            break;             
      }
      
    compra = prompt('Desea comprar otro producto? (s-si / n-no)');
} 

alert("Total gastado en tu compra $" + total);

function incrementarTotal (precio){
    total = total + precio;
    alert("Llevas gastado $"+ total);
}

let pagoContado = total - (total * 0.1);
let pagoEnCuotas = total * 1.25;

   



let pagoFinal = prompt("Pagando en efectivo, tienes un descuento del 10% y pagando en 6 cuotas tienes un recargo del 25%, como deseas pagar? (1-efectivo / 2-en 6 cuotas)");
if(pagoFinal =="1"){
    alert("El total de tu compra es de $"+ pagoContado );
}else{
    alert("El total de tu compra en 6 cuotas es de $"+ pagoEnCuotas );
}

 mensajeFinal = prompt("Muchas gracias por tu compra");

  */


     const listaProductos = [
    { 
        id: 1,  
        nombre: "PC-Gamer",
        precio: 180000
    },
    {  
        id: 2,
        nombre: "Silla-Gamer", 
        precio: 80000 
    },
    {  
        id: 3,  
        nombre: "Auriculares-Xpro", 
        precio: 16000
    },
    { 
        id: 4,  
        nombre: "Teclado-Xpro", 
        precio: 12000
    },
    {  
        id: 5,  
        nombre: "Moouse-Xpro", 
        precio: 10000
    },
    {  
        id: 6,  
        nombre: "Monitor", 
        precio: 50000
    }
                    ];
   
                    const generarMensaje = () => {
                        let mensaje = "";
                        listaProductos.forEach(p => {
                            mensaje += `${p.id} - ${p.nombre}\n`;
                        });
                        return mensaje;
                    };
                    
                    const calcularTotal = (productos) => {
                        let total = 0;
                        productos.forEach(producto => {
                            total += producto.precio;
                        });
                        if (productos.length > 1) {
                            total *= 0.9; // Aplica el descuento del 10% si hay más de un producto
                        }
                        return total;
                    };
                    
                    const comprarProductos = () => {
                        const productosComprados = [];
                        let seguirComprando = true;
                        while (seguirComprando) {
                            const mensaje = generarMensaje();
                            const idProducto = parseInt(prompt("Ingrese el ID del producto a comprar:\n" + mensaje));
                            const producto = listaProductos.find(p => p.id === idProducto);
                            if (producto) { 
                                productosComprados.push(producto);
                                const respuesta = prompt("¿Desea seguir comprando? (Ingrese 'si' o 'no')").toLowerCase();
                                while (respuesta !== "si" && respuesta !== "no") {
                                    respuesta = prompt("Respuesta inválida. ¿Desea seguir comprando? (Ingrese 'si' o 'no')").toLowerCase();
                                }
                                if (respuesta === "no") {
                                    seguirComprando = false;
                                }
                            } else {
                                alert("ID ingresado no válido");
                            }
                        }
                        const totalSinDescuento = calcularTotal(productosComprados);
                        const totalConDescuento = totalSinDescuento * 0.9;
                        const descuento = totalSinDescuento - totalConDescuento;
                        alert(`Gracias por su compra!\n\nTotal de la compra: $${totalSinDescuento}\nDescuento: $${descuento}\nTotal a pagar: $${totalConDescuento}`);
                    };
                    
                    comprarProductos();