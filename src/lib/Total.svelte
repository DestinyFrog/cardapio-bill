<script lang="ts">
	import { carrinho } from "./CarrinhoStore.svelte"
	import { formatarValor } from "./Functions"

	let total = $derived(carrinho.total)
</script>

<footer>
	<div class="conta">
		{#each carrinho.getItens() as item}
			<div class="menu-item">
				<button class="action" onclick={() => carrinho.remove(item)}>-</button>
				<span class="nome">{item.quantidade}x {item.nome}</span>
				<span class="line"></span>
				<span class="preco">{ formatarValor(item.total) }</span>
			</div>
		{/each}

		<div class="menu-item">
			<span class="nome">Total</span>
			<span class="line"></span>
			<span class="preco">{ formatarValor(total) }</span>
		</div>
	</div>

	{#if carrinho.getItens().length > 0}
		<a class="btn-pedido" href={ carrinho.createLink() } target="_blank">Enviar Pedido</a>
	{/if}
</footer>

<style scoped>
	footer {
		border-top: 2px solid white;
		width: 100vw;
		position: fixed;
		bottom: 0;
		background-color: black;
	}

	.conta {
		padding: 12px;
	}

	.btn-pedido {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		border: 0;
		padding: 10px;
		border-top: 2px solid white;
		
		background-color: transparent;
		color: white;

		text-decoration: none;
		font-size: 1rem;
		font-weight: 600;
		font-family: "Montserrat", sans-serif;
    	font-style: normal;
	}
</style>
