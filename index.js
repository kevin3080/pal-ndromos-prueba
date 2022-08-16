/* Ejercicio 2:
Desarrolla un script que encuentre las cadenas de texto que sean palíndromos con más de 3 letras en el siguiente bloque de texto: */

let frase = 'anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero'

let contador = 0;
let almacenador = 0;
let lista = []
let frasesPoli = '';
const resp = "Palabras polindromas encontradas: "

for(let i = contador ; i < frase.length ; i++){ // recorremos la cadena de texto
    almacenador = contador
    while(almacenador < frase.length){ 
        if(frasesPoli.length > 3){ // hacemos comprobaciones para guardar cadenas de texto en el array
            if(palindromo(frasesPoli)){
                lista.push(frasesPoli) // vamos agregando cadenas de texto al array
                contador = almacenador;
                frasesPoli = ''; // damos un espaciado
                break; // detenemos el while una vez termine la comprovacion, evitamos posibles errores
            }
        }
        almacenador++;
        frasesPoli = frasesPoli + frase[almacenador] // recorremos cada caracter
    }
    frasesPoli = ''
    contador ++
}
function palindromo(texto){
    let textoMinus = texto.toLowerCase() // no hace falta ya que esta todo el texto esta en minuscula... pero asi evitamos posibles errores
    let invertirText = textoMinus.split('').reverse().join(''); // convetimos el texto en un array, lo invertimos y lo unimos
 
    return invertirText === textoMinus; // retornamos las frases palindromas, comparando el texto al derecho y al revez
}

console.log(resp);
console.table(lista);
