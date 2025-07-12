
export interface Item {
	id: number
	nome: string
	preco: number
	tipo: string
}

const menu: Item[] = [
	{
		id: 1,
		nome: "Espetinho de Carne",
		preco: 8,
		tipo: "espetinho"
	},
	{
		id: 2,
		nome: "Espetinho de Queijo",
		preco: 8,
		tipo: "espetinho"
	},
	{
		id: 3,
		nome: "Espetinho Misto (Carne + Linguiça)",
		preco: 8,
		tipo: "espetinho"
	},
	{
		id: 4,
		nome: "Batata Frita com Cheddar e Bacon",
		preco: 35,
		tipo: "batata-frita"
	},
	{
		id: 5,
		nome: "Batata Frita com Ketchup e Mostarda",
		preco: 35,
		tipo: "batata-frita"
	},
	{
		id: 6,
		nome: "Coca Cola",
		preco: 8,
		tipo: "bebida"
	},
	{
		id: 7,
		nome: "Guaraná",
		preco: 8,
		tipo: "bebida"
	},
	{
		id: 8,
		nome: "Cerveja",
		preco: 8,
		tipo: "bebida"
	},
	{
		id: 9,
		nome: "Balde (10 cervejas)",
		preco: 50,
		tipo: "bebida"
	},
	{
		id: 10,
		nome: "Combo: (pinga + energético)",
		preco: 20,
		tipo: "bebida"
	}
]

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
