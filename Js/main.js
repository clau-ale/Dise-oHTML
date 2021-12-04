class Producto {
    constructor(id, nombre, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
const productos = [];
productos.push(new Producto(1, "Razer Kraken X USB", 7000));
productos.push(new Producto(2, "Razer Kraken WidowMaker", 8000));
productos.push(new Producto(3, "Razer Hammerhead", 12000));
productos.push(new Producto(4, "Razer Blade 15'", 320000));
productos.push(new Producto(5, "Razer Nari Ultimate", 18000));
productos.push(new Producto(6, "Razer Barracu", 7000));
console.log(productos)

for (const producto of productos) {
    alert("Prod " + producto.id + " " + producto.nombre + " $" + producto.precio);

}