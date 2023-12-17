/* Tipos de Dados:
 1. Numéricos (Número Inteiro e Número Decimal)
 String: texto (palavras, frases)
 - Number: Números (1234567890)
- Boolean: Verdadeiro ou Falso
- Null: Não tem valor / Valor nulo
- Undefined: Variável não foi declarada / Atribuída um valor
 - Object: Objetos / Arrays / Funções 
- Symbol: Símbolos únicos
- Function: Função / Métodos */

const number1 =32 / 2 // Numbers//
const fakeNumber = "32/2" // Strings//

console.log (number1)
console.log(fakeNumber)

/*Operadores de comparação
== Igual a
!= Diferente de
=== Estrito igual a
!== Estrito diferente de
> Maior que
< Menor que
>= Maior ou igual a 
<= Menor ou igual a*/
if (number1 === 16) {
    console.log("O número é par")
    } else{
        console.log ("O número é impar")
        }
        let variavel; //Undefined
        console.log(variavel);
        variavel = "Eu sou uma string"; //String    
        console.log(variavel);
        const obj1 = {a : 1 , b : 2, c : 3}; //Object
        console.log(obj1.b);
        function soma (x , y){
            return x + y ;
            }; //Function
            console.log(soma(5,10));
            const arr1 = [1,2,3]; //Array
            console.log(arr1[0]);
            for (let i=0 ; i < arr1.length ;i++){
                console.log(`Valor ${i}:${arr1[i]}`);
                }
       
       



