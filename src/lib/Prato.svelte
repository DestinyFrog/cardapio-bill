<script lang="ts">
	import { formatarValor } from "./Functions"
	import type { Prato } from "./Cardapio"
	import { carrinho, adicionaCarrinho, removeCarrinho } from "./CarrinhoStore.svelte"
	import { tamanho_linha } from "./Configuracao"

	let {
		prato
	}: {
		prato: Prato
	} = $props()

	const valor_formatado = formatarValor(prato.valor)
	const qtd_pontos = tamanho_linha - prato.nome.length - valor_formatado.length - 2

	let quantidade = $derived(carrinho.filter((prato_id) => prato_id == prato.id).length)
</script>

<div class="menu-item">
	<p>
		{ prato.nome } {".".repeat(qtd_pontos)} { valor_formatado } | {quantidade.toString().padStart(2, "0")}x |
        <button class="button-act" onclick={() => adicionaCarrinho(prato)}>+</button>
        <button class="button-act" onclick={() => removeCarrinho(prato)}>-</button>
	</p>
</div>

<style>
	.menu-item {
        font-size: 16px;
        padding-bottom: 6px;
        text-align: left;
        width: 100%;
	}

    .button-act {
        width: 20px;
        height: 20px;
        border: 0;
        background-color: transparent;
    }
</style>
