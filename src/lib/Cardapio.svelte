<script lang="ts">
	import { cardapio } from "./Cardapio"
	import { getTotal } from "./CarrinhoStore.svelte"
	import { tamanho_linha } from "./Configuracao"
	import { formatarValor } from "./Functions"
	import MenuCard from "./MenuCard.svelte"

	let total = $derived( formatarValor( getTotal() ) )
	let quantidade_pontos = $derived( tamanho_linha - 6 - total.toString().length )
</script>

<div class="cards">
	{#each cardapio as tipo}
		<MenuCard {tipo} />
	{/each}

	<h1>Total</h1>
	<p class="total">Total { ".".repeat(quantidade_pontos) } { total }</p>
</div>

<style>
	.cards {
		width: 100%;
		display: flex;
		flex-direction: column;
		font-family: 'Courier New', Courier, monospace;
	}
	
	.total {
		font-family: 'Courier New', Courier, monospace;
		text-align: left;
		width: 100%;
	}
</style>
