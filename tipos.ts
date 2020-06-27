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
