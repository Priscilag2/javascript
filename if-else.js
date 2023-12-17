/*  - IF (Se)
    -Else(Se não)

    Operadores de comparaçâo
    > maior que
    < menor que
    >= maior ou igual a
    <= menor ou igual a
    == é igual a

    */

    const notaDoAluno =3
    const notaDeCorte = 5

    if (notaDoAluno > notaDeCorte) {
        //oque será executado , se o if for verdadeiro.
        console.log("Parabêns, você passou de ano.")
    }

   // if (notaDoAluno < notaDeCorte) 
        //console.log( "Você foi aprovado")
    
    
else {
    console.log ("Infelizmente, você foi reprovado.")
    // No Else não tem parentes porque não precisa de condicôes.
}



const senhaDoUsuario =123456
const senhaDigitada =123456

if (senhaDoUsuario == senhaDigitada){
    console.log("Seja-bem vindo,Você está logado(a)")
}

else {
    console.log("Senha incorreta! Tente novamente.")
}

  
