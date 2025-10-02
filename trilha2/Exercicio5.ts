class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        if (compromisso && compromisso.trim() !== "") {
            this.compromissos.push(compromisso);
            console.log(`Compromisso adicionado: "${compromisso}"`);
        } else {
            console.log("Não é possível adicionar um compromisso vazio.");
        }
    }

    listarCompromissos(): void {
        console.log("\n--- LISTA DE COMPROMISSOS ---");
        if (this.compromissos.length === 0) {
            console.log("Nenhum compromisso na agenda.");
        } else {
            this.compromissos.forEach((compromisso, index) => {
                console.log(`${index + 1}. ${compromisso}`);
            });
        }
        console.log("-----------------------------\n");
    }
}

const minhaAgenda = new Agenda();

minhaAgenda.listarCompromissos();

minhaAgenda.adicionarCompromisso("Reunião com a equipe às 10h");
minhaAgenda.adicionarCompromisso("Consulta médica às 15h");
minhaAgenda.adicionarCompromisso("Estudar TypeScript à noite");

minhaAgenda.listarCompromissos();