class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido(): void {
        this.lido = true;
        console.log(`O livro "${this.titulo}" foi marcado como lido.`);
    }

    info(): void {
        const status = this.lido ? "Lido" : "Não Lido";
        console.log("--- Informações do Livro ---");
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Páginas: ${this.paginas}`);
        console.log(`Status: ${status}`);
        console.log("--------------------------");
    }
}

const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1200);

meuLivro.info();

meuLivro.marcarComoLido();

meuLivro.info();

const outroLivro = new Livro("O Hobbit", "J.R.R. Tolkien", 300);
outroLivro.info();