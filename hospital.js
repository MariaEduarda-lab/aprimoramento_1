// Classe Fila (FIFO - Primeiro a entrar, primeiro a sair)
class Fila {
  constructor() {
    this.itens = []; // Array que compreende os elemntos da fila
  }

  // Adicionar um elemento no fim da fila
  adicionarFila(elemento) {
    this.itens.push(elemento);
  }

  // Remover o primeiro elemento da fila
  tirarFila() {
    return this.itens.shift();
  }

  // Mostrar o primeiro da fila e não há movimentação
  frenteFila() {
    return this.itens[0];
  }

  // Verificar se a fila está vazia
  filaVazia() {
    return this.itens.length === 0;
  }

  // Mostrar todos os elementos da fila
  mostrarFila() {
    return this.itens.join(', ');
  }
}

// Classe Pilha (LIFO - Último a entrar, primeiro a sair)
class Pilha {
  constructor() {
    this.itens = []; //Array que compreende todos os itens
  }

  // Adicionar um elemento ao topo da pilha
  empilhar(elemento) {
    this.itens.push(elemento);
  }

  // Remover o elemento do topo da pilha
  desempilhar() {
    return this.itens.pop();
  }

  // Mostrar o topo da pilha (sem remover)
  topo() {
    return this.itens[this.itens.length - 1];
  }

  // Verificar se a pilha está vazia
  filaVazia() {
    return this.itens.length === 0;
  }

  // Mostrar todos os elementos da pilha
  mostrarFila() {
    return this.itens.join(', ');
  }

}

// Instanciar a fila de atendimento e a pilha de prontuários
const filaAtendimento = new Fila();
const prontuarios = new Pilha();

// Adicionar 5 pacientes à fila
filaAtendimento.adicionarFila("Ana");
filaAtendimento.adicionarFila("Bruno");
filaAtendimento.adicionarFila("Carla");
filaAtendimento.adicionarFila("Daniel");
filaAtendimento.adicionarFila("Elisa");

// Mostrar quem será o próximo a ser atendido
console.log("Próximo paciente: " + filaAtendimento.frenteFila());

// Simular atendimento de dois pacientes
for (let i = 0; i < 2; i++) {
  const paciente = filaAtendimento.tirarFila();
  console.log(`Atendendo: ${paciente}`);
  prontuarios.empilhar(paciente); // Adiciona à pilha de prontuários
}

// Mostrar fila restante
console.log("Fila restante: " + filaAtendimento.mostrarFila());

// Mostrar pilha de prontuários
console.log("Prontuários arquivados (topo = último atendido): " + prontuarios.mostrarFila());