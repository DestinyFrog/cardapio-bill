import { data, type Prato } from "./Cardapio"

export const carrinho: number[] = $state([])

export function adicionaCarrinho(prato:Prato) {
    carrinho.push(prato.id)
}

export function removeCarrinho(prato:Prato) {
    const index = carrinho.indexOf(prato.id)

    if (index != -1) {
        carrinho.splice(index, 1)
    }
}

export function getTotal() {
    return carrinho.reduce(
        (total, prato_id) => total + data.pratos.find(
            ({id}) => prato_id == id)!.valor, 0)

}