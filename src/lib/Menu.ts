import menu_json from '../data/menu.json'

export interface Item {
	id: number
	nome: string
	preco: number
	tipo: string
}

const menu: Item[] = menu_json
export default menu

function getMenuByTipo(): Map<string, Item[]> {
	const menu_tipos = new Set( menu.map(({ tipo }) => tipo) )
	const new_menu: Map<string, Item[]> = new Map()

	for (let menu_tipo of menu_tipos) {
		const itens = menu.filter(({ tipo }) => tipo == menu_tipo)
		new_menu.set(menu_tipo, itens)
	}

	return new_menu
}
export const menuByTipos = getMenuByTipo()
