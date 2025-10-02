class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorTotalEmEstoque(): number {
        return this.preco * this.quantidade;
    }
}

const produto1 = new Produto("Notebook Gamer", 7500, 10);
const valorTotal1 = produto1.calcularValorTotalEmEstoque();
console.log(`O valor total em estoque do produto "${produto1.nome}" é: R$${valorTotal1.toFixed(2)}`);

const produto2 = new Produto("Mouse sem Fio", 150, 50);
const valorTotal2 = produto2.calcularValorTotalEmEstoque();
console.log(`O valor total em estoque do produto "${produto2.nome}" é: R$${valorTotal2.toFixed(2)}`);