// Escribe tu código aquí.
/*.- Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.

- Escribe una función que reciba 2 parámetros
   - Parámetro 1 - Un string
   - Parámetro 2 - Un array de strings
- La función debe devolver todas las palabras del array de entrada (parámetro 2) que sean más largas que el string de entrada (parámetro 1)
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];`
   - `bigWords('bocina', myArray);`
   - Output - `['insecto', 'bootcamp', 'escritorio']`

2.- Construye una función que reciba por parámetros un array de strings y lo imprima dentro de la lista (<ul></ul>) en el index.html. La función debe mostrar la lista en el HTML manipulando el DOM, cada string del arreglo debe imprimirse en un elemento **<li></li>**. El array que se recibe por parámetros debe ser un array resultante de utilizar la función anterior.

- Escribe una función que reciba 1 parámetro
   - Parámetro 1 - Un array de strings
- La función debe mostrar la lista en el HTML, cada string del arreglo debe imprimirse en un elemento **<li></li>**.
- Ejemplo:
   - `const myArray = ['insecto', 'bootcamp', 'escritorio'];`
   - `printArray(myArray);`
   - Output - `<li>insecto</li>
               <li>bootcamp</li>
               <li>escritorio</li>
               `
3.- Conecta tu archivo JS con el index.html. Comprueba el funcionamiento del código con diferentes inputs.
*/ 


//Arreglo de strings (con 10 palabras)
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'ropa', 'comida', 'bueno', 'laptop'];


//Funcion para ver si la palabras en myArray es mayor que la palabra ="bocina"
//funcion con dos parametros
function bigWords(palabra, myArray){
    

    //i = indice 
    for(let i = 0;  i < myArray.length; i++){
        //si la longitud de myArray es mayor que la longitud de la palabra "bocina"
        if(myArray[i].length > palabra.length){
            //imprimir en consola 
            console.log(myArray[i]);
        }
    }
    //invocar la funcion
}bigWords('bocina', myArray);

    //mostrar en el DOM
    //Traer el elemento de html 
    const listaElementos = document.querySelector("#lista");
   //create element
   const palabraElementos = document.createElement("li");
   //append child
   listaElementos.appendChild(palabraElementos);