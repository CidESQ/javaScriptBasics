/* Excercise: Managing a Stack
 *  Crear un programa simulando un stack con los metodos push y pop
 *  El stack debe de almacenar una colección de libros
 *  Debe enseñar un menu al usuario para mostrar:
 *  1. Agregar un nuevo libro al tope de la pila.
 *  2. Remover el libro del tope de la fila.
 *  3. Mostrar la pila de libros
 */
let stack = [];

class Libro {
    constructor(titulo, autor, edicion) {
        this.titulo = titulo || "";
        this.autor = autor || "";
        this.edicion = edicion || 0;
    }
}

function agregarLibro(book) {
    stack.push(book);
}

function quitarLibro() {
    stack.pop();
}

function showStack() {
    console.log(stack);
}

const libroA = new Libro("Libro A", "angel anglis", 3);
const libroB = new Libro("Libro B", "Bob blizzard", 2);
const libroC = new Libro("Libro C", "Carol Canvers", 5);
const libroD = new Libro("Libro D", "David Dorme", 7);

agregarLibro(libroA);
agregarLibro(libroB);
agregarLibro(libroC);
showStack();
quitarLibro();
showStack();

//* Excercise: Managing a Stack
let bookCart = [];
const ADD_TO_CART_ACTION = "addToCart"; //? Aqui se inicializan las variables para que queden en el entorno y sean faciles de usar aun que su valor no se use
const REMOVE_FROM_CART = "removeFromCart";
const VIEW_CART_ACTION = "viewCart";

function viewCart() {
    console.log(`Current cart of books \n ${bookCart} `);
}

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook);
            break;

        case REMOVE_FROM_CART:
            if (bookCart.length === 0) {
                console.log("The cart is already empty");
            } else {
                const removedBook = bookCart.pop();
                console.log(`Se ha eliminado el libro ${removedBook}`);
            }
            break;

        case VIEW_CART_ACTION:
            viewCart();
            break;

        default:
            console.log("Invalid Option!");
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, "Think like a monk");
performCartActions(ADD_TO_CART_ACTION, "Ego is the enemy");
performCartActions(VIEW_CART_ACTION);
