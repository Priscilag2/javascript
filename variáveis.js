/* O que são variaveis?

/* Variaveis sao como caixas de armazenamento para guardar informações.
Elas podem ser usadas para armazenar valores, strings e outros tipos de dados.
Variaveis precisam ter um nome (nome da variavel) e um valor associado a ela.
 
Variáveis:
- Nome: é o identificador ou apelido que você escolheu para essa variável.
- Valor: é o conteúdo que você deseja armazenar naquela variável.

Variáveis : 

1 - Variáveis simples;
2 - Variáveis compostas;
3 - Variáveis globais;
4 - Variáveis locais;
5 - Variáveis constantes;
6 - Variáveis dinâmicas;
7 - Variáveis estáticas;
8 - Variáveis de referência;
9 - Variáveis de função;
10 - Variáveis de objeto;
11 - Variáveis de array;
12 - Variáveis de matriz;

Variáveis :

-let =>Não se usa mais, porém pode ser visto em códigos antigos.
-var =>Quando você precisa trocar o valor da variavel.
-const =>Quando você não irá alterar o valor da sua variavel,não pode ser declarado novamente.

"Variáveis"
 Não pode começar com números.
 Pode conter letras, numeros, underscore (_), mas não começa com um numero.
 Deve ser único no escopo do seu codigo.
 Tipos de Dados:
 Numero Inteiro: Exemplos: 1, 2, 3...
 Numero Decimal: Exemplos: 1.1, 2.2, 3.3...
 String: Texto qualquer, exemplo: "Olá", "Mundo".
 Boolean: Verdadeiro ou Falso, true ou false.
 Null: Representa um nulo ou vazio.
 Undefined: Indica que uma variável ainda não foi definida.
 Object: Um conjunto de pares chave/valor, representa um Objeto.
 Array: Uma coleção de itens, representada entre colchetes [].
 Function: Funções, representa um bloco de código reutilizavel.
 Symbol: Símbolo exclusivo, utilizado principalmente nas linguagens modernas.
 BigInt: Numeros grandes, representa um número grande sem limite de casas decimais.
 */
//Exercícios
//Exercício 1
/* Crie uma variável chamada "idade" e atribua o valor 25 a ela.*/
let idade = 25;
console.log(idade); //Resultado: 25
//Exercício 2   
/* Crie uma variável chamada "nome" e atribua o valor "Joao" a ela.*/
let nome = 'Joao';
console.log(nome); //Resultado: Joao
//Exercício 3
/* Crie uma variável chamada "altura" e atribua o valor 1.80 a ela.*/
let altura = 1.80;
console.log(altura) //Resultado: 1.80
//Exercício 4
/* Crie uma variável chamada "peso" e atribua o valor 75 a ela.*/
let peso = 75;
console.log(peso); //Resultado: 75
//Exercício 5
/* Crie uma variável chamada "ano_de_nasciemento" e atribua o valor 1995 a ela
e faça um console log para mostrar o resultado.*/
let ano_de_nasciemento = 1995;
console.log(ano_de_nasciemento); //Resultado: 1995  
//Exercício 6
/* Crie uma variável chamada "salario" e atribua o valor 5000 a ela     
e faça um console log para mostrar o resultado.*/
let salario = 5000
console.log(salario); //Resultado: 5000
//Exercício 7
/* Crie uma função chamada "calcularIdade" que receba como parametro a idade e retorne a idade

multiplicada por dois. Faça um console log para mostrar o resultado dessa função passando 25 como parametro.*/

function calcularIdade(idade) {
    return idade;
}
console.log(calcularIdade(idade)); //Resultado: 25
//Exercício 8
/*Crie uma função chamada "calcularAltura" que receba como parametro a altura e retorne a alt*/
function calcularAltura(altura) {
    return altura;
}
console.log(calcularAltura(altura)); //Resultado: 1.80
/*Exercício 9  
Crie uma função chamada "calcularPeso" que receba como parametro o peso e retorne o pes*/
function calcularPeso(peso) {
    return peso;
}
console.log(calcularPeso(peso)); //Resultado: 75  
/*Exercício 10
Crie uma função chamada "calcularSalario" que receba como parametro o salário e retornar o sa*/
function calcularSalario(salario) {
    return salario;
}
console.log(calcularSalario(salario)); /*Resultado: 5000
                Exercício 11*/
function calcularAnoNasciemento(ano_nascimento) {
    return ano_nascimento;
}
console.log(calcularAnoNasciemento(ano_nascimento)); //Resultado: 1995
/*Exercício 12
* Crie uma função chamada "calcularSexo" que receba como parametro o sexo e retorne
* o sexo */
function calcularSexo(sexo) {
    return sexo;
}
console.log(calcularSexo(sexo)); //Resultado: Masculino 
/*Exercício 13
* Crie uma função chamada "calcularCorDoCabelo" que receba como parametro a cor do cabel    
* e retorne a cor do cabelo */
function calcularCorDoCabelo(cor_do_cabelo) {
    return cor_do_cabelo;
}
console.log(calcularCorDoCabelo(cor_do_cabelo)); //Resultado: Castanho clar
/*Exercício 14
* e retorne o estado civil */
function calcularEstadoCivil(estado_civil) {
    return estado_civil;
}
console.log(calcularEstadoCivil(estado_civil)); //Resultado: Solteiro
/*Exercício 15
* e retorne o nome da profissão */
function calcularProfissao(profissao) {
    return profissao;
}
console.log(calcularProfissao(profissao)); //Resultado: Engenheiro de Software
/*Exercício 16
* e retorne o nome da escola */
function calcularEscola(escola) {
    return escola;
}
console.log(calcularEscola(escola)); //Resultado: Escola Tecnica
/*Exercício 17
* e retorne o curso */
function calcularCurso(curso) {
    return curso;
}
console.log(calcularCurso(curso)); //Resultado: Análise e Desenvolvimento de Sist
/*Exercício 18
* e retorne o turno */
function calcularTurno(turno) {
    return turno;
}
console.log(calcularTurno(turno)); //Resultado: Manhã
/*Exercício 19
* e retorne o horário de entrada na faculdade */
function calcularHorarioEntradaFaculdade(horario_entrada_faculdade) {
    return horario_entrada_faculdade;
}
console.log(calcularHorarioEntradaFaculdade(horario_entrada_faculdade)); /*Res
20: 10h
/*Exercício 21
* e retorne o horário de saída da faculdade */
function calcularHorarioSaidaFaculdade(horario_saida_faculdade) {
    return horario_saida_faculdade;
}
console.log(calcularHorarioSaidaFaculdade(horario_saida_faculdade)); /*Resultado
21: 13h
/*Exercício 22
* e retorne a idade do aluno */
function calcularIdadeAluno(idade_aluno) {
    return idade_aluno;
}
console.log(calcularIdadeAluno(idade_aluno)); //Resultado: 20 anos
/*Exercício 23
* e retorne o saldo bancário do aluno */
function calcularSaldoBanco(saldo_banco) {
    return saldo_banco;
}
console.log(calcularSaldoBanco(saldo_banco)); //Resultado: R$ 400
/*Exercício 24
* e retorne o valor total das mensalidades */
function calcularValorTotalMensalidades(valor_total_mensalidades) {
    return valor_total_mensalidades;
}
console.log(calcularValorTotalMensalidades(valor_total_mensalidades)); /*Resultado: 
                    R$ 500,00
                    /*Exercício 25
                    * e retorne o nome completo do pai do aluno */
function calcularNomePai(nome_pai) {
    return nome_pai;
}
console.log(calcularNomePai(nome_pai)); //Resultado: Antonio Carlos Ferreira
/*Exercício 26
* e retorne o nome completo da mãe do aluno */
function calcularNomeMae(nome_mae) {
    return nome_mae;
}
console.log(calcularNomeMae(nome_mae)); //Resultado: Maria Aparecida Ferreira
/*Exercício 27
* e retorne o endereço residencial do aluno */
function calcularEnderecoResidencial(endereco_residencial) {
    return endereco_residencial;
}
console.log(calcularEnderecoResidencial(endereco_residencial)); //Resultado: Av. Paul
/*Exercício 28
* e retorne o telefone celular do aluno */
function calcularTelefoneCelular(telefone_celular) {
    return telefone_celular;
}
console.log(calcularTelefoneCelular(telefone_celular)); /*Resultado: (99
                     9999 - 9999
/*Exercício 29
* e retorne o email do aluno */
function calcularEmail(email) {
    return email;
}
console.log(calcularEmail(email)); //Resultado: antonio@gmail.com
/*Exercício 30
* e retorne a data de nascimento do aluno */
function calcularDataDeNascimento(data_nascimento) {
    return data_nascimento;
}
console.log(calcularDataDeNascimento(data_nascimento)); //Resultado: 19/07
2003
/*Exercício 31
* e retorne o cpf do aluno */
function calcularCPF(cpf) {
    return cpf;
}
console.log(calcularCPF(cpf)); //Resultado: 456.789.123
-45
/*Exercício 32
* e retorne o rg do aluno */
function calcularRG(rg) {
    return rg;
}
console.log(calcularRG(rg)); //Resultado: 123456789
/*Exercício 33
* e retorne o curso que o aluno está matriculado */
function calcularCursoMatriculado(curso_matriculado) {
    return curso_matriculado;
}
console.log(calcularCursoMatriculado(curso_matriculado)); /*Resultado: Ciência da
                    Computação
                    Exercícios 34 a 36*/
/*Exercício 34
* e retorne os horários dos dias da semana em que o aluno tem aulas */
function calcularHorariosDaSemana(horario_segunda, horario_terca, horario_quarta, horario_quinta,
    horario_sexta) {
    const horarios = [horario_segunda, horario_terca, horario_quarta, horario_sexta];
    return horarios;
}
console.log(calcularHorariosDiasDaSemana(horario_sexta));/* Resultado: ["08 
                            30", "09 30", "10 30", "11 30"]
                            /*Exercício 35
                            * e retorne as disciplinas que o aluno faz na turma atual */
function calcularDisciplinaAtual(disciplina_atual) {
    return disciplina_atual;
}
console.log(calcularDisciplinaAtual(disciplina_atual));//Resultado: Matemática
/*Exercício 36
* e retorne o nome completo do professor responsável pelo curso */
function calcularProfessorResponsavel(professor_responsavel) {
    return professor_responsavel;
}
console.log(calcularProfessorResponsavel(professor_responsavel)); //Resultado: Antonio Carlos
console.log(calcularProfessorResponsavel(professor_responsavel)); /*Resultado:
                            Professora Maria
                            Exercícios 37 a 40*/
/*Exercício 37
* e retorne o salário mensal do aluno */
function calcularSalarioMensal(salario_mensal) {
    return salario_mensal;
}
console.log(calcularSalarioMensal(salario_mensal)); /*Resultado: R$ 1.
                            .500,00
                            /*Exercício 38
                            * e retorne o número de faltas do aluno */
function calcularNumeroDeFaltas(numero_de_faltas) {
    return numero_de_faltas;
}
console.log(calcularNumeroDeFaltas(numero_de_faltas)); /*Resultado: 5
                            /*Exercício 39
                            * e retorne o total de notas do aluno */
function calcularTotalNotas(total_notas) {
    return total_notas;
}
console.log(calcularTotalNotas(total_notas)); /*Resultado: 20
                            /*Exercício 40
                            * e retorne a média ponderada das notas do aluno */
function calcularMediaPonderada(media_ponderada) {
    return media_ponderada;
}
console.log(calcularMediaPonderada(media_ponderada)); /*Resultado: 8.5
                            */

























