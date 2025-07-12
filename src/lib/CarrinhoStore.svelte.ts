import { formatarValor } from "./Functions"
import menu, { type Item } from "./Menu"

interface ItemQuantidade extends Item {
    quantidade: number
    total: number
}

class Carrinho {
    private itens: number[]

	constructor() {
        this.itens = $state([])
    }

	add(item: Item) {
		this.itens.push(item.id)
	}

	remove(item: Item) {
		const index = this.itens.indexOf(item.id)

		if (index != -1) {
			this.itens.splice(index, 1)
		}
	}

	get total() {
		return this.itens.reduce(
			(total, prato_id) => total + menu.find(({ id }) => prato_id == id)!.preco,
			0)
	}

    getItens(): ItemQuantidade[] {
        const itens_ids = [ ... new Set(this.itens) ]

        return itens_ids.map((item_id) => {
            const item = menu.find(({ id }) => id == item_id)!
            const quantidade = this.itens.filter((id) => id == item_id).length

            return {
                ... item,
                quantidade,
                total: quantidade * item.preco
            }
        }) as ItemQuantidade[]
    }

    private createWhatsappMessage() {
        const itens = this.getItens()
        const itens_msg = itens.map((item) =>
            `- ${item.quantidade}x ${item.nome} | ${ formatarValor( item.total ) }`
        )

        return `Novo Pedido:\n${ itens_msg.join('\n') }\nTotal: ${ formatarValor( this.total ) }`
    }

    createLink() {
        let mensagem = this.createWhatsappMessage()
        let numero = import.meta.env.VITE_WHATSAPP_PEDIDO
        return `https://wa.me/${ numero }?text=${ encodeURIComponent( mensagem ) }`
    }
}

export const carrinho = $state(new Carrinho())
