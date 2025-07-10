<script lang="ts">
	import { cardapio } from "./Cardapio"
	import { getTotal } from "./CarrinhoStore.svelte"
	import { tamanho_linha } from "./Configuracao"
	import { formatarValor } from "./Functions"
	import MenuCard from "./MenuCard.svelte"
	import { data } from "./Cardapio.ts"
	import { carrinho } from "./CarrinhoStore.svelte.ts"
</script>

<div class="cards">
	{#each cardapio as tipo}
		<MenuCard {tipo} />
	{/each}

	<h1>Total</h1>
	{#each carrinho as prato_id}
		{@const prato = data.pratos.find(({id}) => id == prato_id) }
		<p>+ { formatarValor(prato.valor) } | { prato.nome }</p>
	{/each}

	<p class="total">= { formatarValor( getTotal() ) } | Total</p>
</div>

<style>
	.cards {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-family: 'Courier New', Courier, monospace;
		font-size: 11px;
	}
	
	.total {
		font-family: 'Courier New', Courier, monospace;
		text-align: left;
		width: 100%;
	}
</style>
