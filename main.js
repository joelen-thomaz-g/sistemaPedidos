import { Pedido } from './Pedido.js'
import { ItemPedido } from './ItemPedido.js'

const sendButton = document.getElementById('send').addEventListener('click', fazerPedido)
const listButton = document.getElementById('list').addEventListener('click', listarPedido)

const pedido = new Pedido();
const item = new ItemPedido();

function fazerPedido(e) {
    e.preventDefault();
    const nome = document.getElementById('product-name').value;
    const qtd = document.getElementById('product-quantity').value;
    const preco = document.getElementById('product-price').value;

    item.nome = nome;
    item.quantidade = qtd;
    item.preco = preco;

    pedido.addItem(item)
}
