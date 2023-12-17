/* Null & Undefined */

//Null quando você decide deixar campo vazio.
//Undefined quando você faz algo errado, algo que não existe, não tem e o computador responde undefined.

const users= [
    {
        name: "Rodolfo",
        age: 30,
        noneDoConjugue:"Aline",
        id:null,
    },

    {
        name: "Aline",
        age:28,
        noneDoConjugue: "Rodolfo",
        id: null,

    },
]

/* Null & Undefined */

/* A maioria das linguagens de programação possui um tipo "nulo" para representar a ausência de um valor. Ela pode possuir vários nomes (null, nil, None, etc), mas seu propósito é o mesmo (com exceção do SQL, onde NULL quer dizer "desconhecido"). JavaScript, entretanto, possui dois tipos distintos: null e undefined.

Qual a diferença entre esses dois tipos? Noto que nem sempre são usados consistentemente (embora em geral também signifiquem ausência de valor), de modo que fica difícil saber quando usar um ou outro. Sei que uma variável que nunca foi atribuída é undefined - bem como um campo não existente em um objeto - mas sei também que é possível atribuir manualmente esse valor através de var x = undefined; ou obj.foo = undefined.

Há alguma razão, na prática, para se usar um ou outro? Ou seria melhor usar somente um deles, e esquecer que o outro existe (e se sim, qual)? Misturar os dois no mesmo programa parece tornar mais difícil tratar casos de valor ausente... Qual seria a melhor abordagem no caso em que isso está fora do seu controle? (i.e. bibliotecas/frameworks externas usam um ou outro tipo no mesmo script) */






