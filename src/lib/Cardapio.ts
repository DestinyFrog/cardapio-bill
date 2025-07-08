export interface prato {
  id: number;
  nome: string;
  valor: number;
  tipo: string;
}

const cardapio = {
  pratos: [
    {
      id: 1,
      nome: "Batata Frita com Cheddar e Bacon",
      valor: 35,
      tipo: "batata-frita",
    },
    {
      id: 2,
      nome: "Batata Frita com Ketchup e Mostarda",
      valor: 35,
      tipo: "batata-frita",
    },
    {
      id: 3,
      nome: "Espetinho de Carne",
      valor: 8,
      tipo: "espetinho",
    },
    {
      id: 4,
      nome: "Espetinho de Queijo",
      valor: 8,
      tipo: "espetinho",
    },
    {
      id: 5,
      nome: "Espetinho Misto (Carne + Linguiça)",
      valor: 8,
      tipo: "espetinho",
    },
    {
      id: 6,
      nome: "Coca Cola",
      valor: 8,
      tipo: "bebida",
    },
    {
      id: 7,
      nome: "Guaraná",
      valor: 8,
      tipo: "bebida",
    },
    {
      id: 8,
      nome: "Cerveja",
      valor: 8,
      tipo: "bebida",
    },
    {
      id: 9,
      nome: "Balde c\\ 10 cervejas",
      valor: 50,
      tipo: "bebida",
    },
    {
      id: 10,
      nome: "Combo: Pinga + Energético",
      valor: 20,
      tipo: "bebida",
    },
  ],
  tipos: [
    {
      id: 1,
      tipo: "batata-frita",
      tituto: "Batata Frita",
    },
    {
      id: 2,
      tipo: "espetinho",
      tituto: "Espetinhos",
    },
    {
      id: 3,
      tipo: "bebida",
      tituto: "Bebidas",
    },
  ],
};

export async function getCardapio() {
  return cardapio.tipos.map((tipo) => {
    const pratos = cardapio.pratos.filter(
      ({ tipo: prato_tipo }) => tipo.tipo == prato_tipo
    );

    return {
      ...tipo,
      pratos,
    };
  });
}
