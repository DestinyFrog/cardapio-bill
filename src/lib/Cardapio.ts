
export interface prato {
    nome: string,
    valor: number,
    tipo: string,
}

const cardapio: { pratos: prato[] } = {
    "pratos": [
        {
            "nome": "Batata Frita com Cheddar e Bacon",
            "valor": 35,
            "tipo": "batata-frita"
        },
        {
            "nome": "Batata Frita com Ketchup e Mostarda",
            "valor": 35,
            "tipo": "batata-frita"
        },
        {
            "nome": "Espetinho de Carne",
            "valor": 8,
            "tipo": "espetinho"
        },
        {
            "nome": "Espetinho de Queijo",
            "valor": 8,
            "tipo": "espetinho"
        },
        {
            "nome": "Espetinho Misto (Carne + Linguiça)",
            "valor": 8,
            "tipo": "espetinho"
        },
        {
            "nome": "Coca Cola",
            "valor": 8,
            "tipo": "bebida"
        },
        {
            "nome": "Guaraná",
            "valor": 8,
            "tipo": "bebida"
        },
        {
            "nome": "Cerveja",
            "valor": 8,
            "tipo": "bebida"
        },
        {
            "nome": "Balde c\\ 10 cervejas",
            "valor": 50,
            "tipo": "bebida"
        },
        {
            "nome": "Combo: Pinga + Energético",
            "valor": 20,
            "tipo": "bebida"
        }
    ]
}

export async function getCardapio() {
    return cardapio;
}