import { produtos } from './produtos.js';
console.log('Total de produtos:', produtos.length);


const loja = 'TechAngola';
let carrinhoTotal = 0;
carrinhoTotal = carrinhoTotal + 15000;
console.log(loja, carrinhoTotal);
console.log(typeof 'olá', typeof 15000, typeof true, typeof []);
console.log(5 === '5');

function calcularIVA(preco, taxa = 0.14) {
return preco * taxa;
}
console.log(calcularIVA(10000));
console.log(calcularIVA(10000, 0.07));

function formatarPreco(valor) {
return `${valor.toLocaleString('pt-PT')} Kz`;
}
console.log(formatarPreco(15000));
console.log(formatarPreco(180000));



//ARROW
const saudacao = nome => `Olá, ${nome}!`;
console.log(saudacao('Ana'));

const descricoes = produtos.map(p => `${p.nome} -
${formatarPreco(p.preco)}`);
console.log(descricoes);

const baratosEmStock = produtos.filter(p => p.stock > 0 && p.preco
< 20000);
console.log(baratosEmStock.map(p => p.nome));

const valorStock = produtos.reduce((acc, p) => acc + p.preco *
p.stock, 0);
console.log('Valor do stock:', formatarPreco(valorStock));


const mediaAvaliacoes = produtos.reduce((acc, p) => acc +
p.avaliacao, 0) / produtos.length;
console.log('Média:', mediaAvaliacoes.toFixed(2));

const nomesAcessorios = produtos
.filter(p => p.categoria === 'acessorios')
.map(p => p.nome);
console.log(nomesAcessorios);

const encontrado = produtos.find(p => p.id === 4);
console.log(encontrado ?? 'Produto não encontrado');

const inexistente = produtos.find(p => p.id === 99);
console.log(inexistente ?? 'Produto não encontrado');

const ordenados = [...produtos].sort((a, b) => b.preco - a.preco);
console.log(ordenados.map(p => p.nome));
console.log(produtos[0].nome); // o original mantém-se

const produto = { id: 7, nome: 'Rato Sem Fios', preco: 8000,
stock: 10 };
console.log(produto.nome, produto['preco']);
produto.stock = 9;
produto.categoria = 'acessorios';
delete produto.stock;
console.log(produto);
console.log(Object.keys(produto));
console.log(Object.entries(produto));


const carrinho = {
itens: [],
adicionar(p) { this.itens.push(p); },
};
carrinho.adicionar(produtos[0]);


carrinho.adicionar(produtos[2]);
console.log(carrinho.itens.length); // 2
