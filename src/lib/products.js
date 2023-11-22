let seed = [
    { id: 1, nombre: "Portatil", precio: 800, marca: "MSI" },
    { id: 2, nombre: "Teclado", precio: 50, marca: "Tecknet" },
    { id: 3, nombre: "Telefono", precio: 202, marca: "Logitech" }
]

let products = null;

export default function getProducts() {
    // if (users)
    //     return users;
    // if (!global._users) {
    //     users = seed;
    //     global._users = users;
    // } else {
    //     users = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!products)
        products = seed;

    return products;
}
