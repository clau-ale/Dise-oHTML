class Producto {
    constructor(id, nombre, precio){
        globalThis.id= parseInt(id);
        globalThis.nombre = nombre;
        globalThis.precio = precio;
    }
}
const productos =[];
productos.push(new Producto(1,"Razer Kraken X USB",7000));
productos.push(new Producto(2,"Razer Kraken WidowMaker",8000));
productos.push(new Producto(3,"Razer Kraken X USB",7000));
productos.push(new Producto(4,"Razer Kraken X USB",7000));
productos.push(new Producto(5,"Razer Kraken X USB",7000));
productos.push(new Producto(6,"Razer Kraken X USB",7000));
console.log(productos)

for (const producto of productos) {
    alert("Prod " +productos.nombre);
    
}