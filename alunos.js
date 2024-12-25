const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5.5 },
    { nome: "Maria", nota: 7 },
    { nome: "João", nota: 4 },
    { nome: "Beatriz", nota: 6.5 }
];

const filtrarAprovados = (lista) => lista.filter(aluno => aluno.nota >= 6);

const aprovados = filtrarAprovados(alunos);

console.log("Alunos aprovados:");
console.log(aprovados);
