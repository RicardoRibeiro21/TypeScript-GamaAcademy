// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const valorPago: number = 45.49;

// String
const nome: string = 'Ricardo Ribeiro';

// Array
const idades: number[] = [23,43,43]
const novasIdades: Array<number> = [12,32,43,3];

// Tuple - Array com tamanho e tipos definidos
let jogadores: [string, string, string] = ['Ricardo', 'Montolivo', 'Pirlo'];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Rejeitado = '002',
    Pendente = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any 
const retornoDados: any[] = [123, 'Ricardo', false];
const retornoDados2: any = {
  // .....  
};

// Void
function printarNaTela(mensgem: string) : string {
    console.log(mensgem);
    return mensgem;
}

//String in function
function printarNaTela2(mensgem: string) : string {
    console.log(mensgem);
    return mensgem;
}

// Null ou undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object){

}

criar({
    idade: 1,
    nome: 'Ricardo Ribeiro Lopes'
});

// Never - Tipo que nunca ocorre
function loopInfinito () : never {
    while(true) {}
}

function erro(msg: string) : never {
    throw new Error(msg);
}

// Por causa do return, ja seta a função com o tipo never
function falha () {
    return erro('Algo falhou');
}

// Union Types
const nota: string | number = 12;
function exibirNota(nota: number | string){
    console.log(`A nota é: ${nota}`);
}

exibirNota('10')

// Alias - Criando atalhos para tipos
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
// type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario []= [{
    nome: 'Ricardo', 
    sobrenome: 'Ribeiro',
    dataNascimento: new Date()
},
{
    nome: 'Vitor', 
    sobrenome: 'Fugita',
    dataNascimento: new Date()
}];
function tratarFuncionarios (funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario ', funcionario.nome)
    }
}

let altura: number | null = 1.5;
altura = null; 

// Criando campo opcional
type Contato = {
    nome: string,
    telefone: string,
    celular?: string
}

// Criando objeto com objeto opcional
const contato: Contato = {
    nome: 'Ricardo',
    telefone: '11 99479-7993'    
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
// (<number>minhaIdade).toString();
// const input = document.getElementById("numero1") as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);