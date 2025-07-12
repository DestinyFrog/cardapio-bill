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
        const itens_ids = Array.from(new Set(this.itens))
        return itens_ids.map((item_id) => {
            const item = menu.find(({ id }) => id == item_id)!
            const quantidade = this.itens.filter((id) => id == item_id).length

            return {
                ... item,
                quantidade,
                total: quantidade * item.preco
            }
        }).sort(({ id }) => id) as ItemQuantidade[]
    }
}

export const carrinho = $state(new Carrinho())
