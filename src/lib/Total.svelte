<script lang="ts">
	import { carrinho } from "./CarrinhoStore.svelte"
	import { formatarValor } from "./Functions"

	let total = $derived( carrinho.total )
</script>

<footer>
	{#each carrinho.getItens() as item}
		<div class="menu-item">
			<button class="action" onclick={ () => carrinho.remove(item) }>-</button>
			<span class="nome">{ item.quantidade }x { item.nome }</span>
			<span class="line"></span>
			<span class="preco">{ formatarValor( item.total ) }</span>
		</div>
	{/each}

	<div class="menu-item total">
		<span class="nome">Total</span>
		<span class="line"></span>
		<span class="preco">{ formatarValor( total ) }</span>
	</div>
</footer>

<style scoped>
	footer {
		border-top: 2px solid white;
		width: 100vw;
		position: fixed;
		bottom: 0;
		padding: 12px
	}

	.total {
		margin-top: 5px;
	}
</style>