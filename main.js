class Animal {
    constructor(nome, especie, habitat, dieta) {
        this.nome = nome;
        this.especie = especie;
        this.habitat = habitat;
        this.dieta = dieta;
    }

    exibirDetalhes() {
        return `${this.nome} (${this.especie}), Habitat: ${this.habitat}, Dieta: ${this.dieta}`;
    }
}

class Mamifero extends Animal {
    constructor(nome, habitat, dieta) {
        super(nome, "Mamífero", habitat, dieta);
    }
}

class Ave extends Animal {
    constructor(nome, habitat, dieta, capacidadeVoo) {
        super(nome, "Ave", habitat, dieta);
        this.capacidadeVoo = capacidadeVoo;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()}, ${this.capacidadeVoo}`;
    }
}

class Reptil extends Animal {
    constructor(nome, habitat, dieta, veneno) {
        super(nome, "Réptil", habitat, dieta);
        this.veneno = veneno;
    }

    exibirDetalhes() {
        const descricaoVeneno = this.veneno === "Sim" ? "Venenosa" : "Não venenosa";
        return `${super.exibirDetalhes()}, ${descricaoVeneno}`;
    }
}

const leao = new Mamifero("Leão", "Savana", "Carnívoro");
const elefante = new Mamifero("Elefante", "Floresta", "Herbívoro");
const pinguim = new Ave("Pinguim", "Regiões Polares", "Carnívoro", "Não pode voar");
const cobra = new Reptil("Cobra", "Florestas tropicais", "Carnívoro", "Sim");

console.log(leao.exibirDetalhes());
console.log(elefante.exibirDetalhes());
console.log(pinguim.exibirDetalhes());
console.log(cobra.exibirDetalhes());

