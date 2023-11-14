import {ItemPedido} from './ItemPedido.js'

class Pedido {
    #listaItens = new ItemPedido()

    constructor() {
        this.#listaItens = []
    }

    addItem(item) {
        const pedidos = this.#listaItens;
        pedidos.push({
            nome: item.nome,
            quantidade: item.quantidade,
            preco: item.preco
        })
        console.log(pedidos);
    }

    listarItens () {
        return this.#listaItens
    }
}

export {Pedido}