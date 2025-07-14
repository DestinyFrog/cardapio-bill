<script lang="ts">
	import { carrinho } from "./CarrinhoStore.svelte"
	import { cortarString, formatarValor } from "./Functions"

	let total = $derived(carrinho.total)

	let is_open = $state(false)
</script>

<footer>
	<button class="btn-nota" onclick={ () => is_open = !is_open }>
		<h2>Pedido</h2>
	</button>

	{#if is_open}
		<div class="conta">
			{#each carrinho.getItens() as item}
				<div class="menu-item">
					<button class="action" onclick={() => carrinho.remove(item)}>-</button>
					<span class="nome">{item.quantidade}x {cortarString(item.nome, 28)}</span>
					<!-- <span class="line"></span> -->
					<span class="preco">{formatarValor(item.total)}</span>
				</div>
			{/each}

			<div class="total menu-item">
				<span class="nome">Total</span>
				<!-- <span class="line"></span> -->
				<span class="preco">{formatarValor(total)}</span>
			</div>
		</div>

		{#if carrinho.getItens().length > 0}
			<a class="btn-pedido" href={carrinho.createLink()} target="_blank">
				Enviar Pedido
			</a>
		{/if}
	{/if}
</footer>

<style scoped>
	footer {
		position: sticky;
		bottom: 0;
		right: 60px;
		width: 100%;

		background-color: black;
		z-index: 10;
	}

	footer * {
		font-family: "Edu NSW ACT Cursive", cursive;
		font-optical-sizing: auto;
		font-weight: lighter;
		font-style: normal;
		color: white;
	}

	.btn-nota {
		width: 100%;
		background-color: transparent;
		border: 0;
	}

	.conta {
		padding: 12px;
	}

	.total {
		border-top: 2px solid white;
		padding-top: 8px;
		margin-top: 12px;
	}

	.nome {
		text-align: left;
		width: 100%;
	}

	.btn-pedido {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		border: 0;
		padding: 10px;

		background-color: transparent;

		text-decoration: none;
		font-size: 1rem;

		font-family: "Edu NSW ACT Cursive", cursive;
		font-optical-sizing: auto;
		font-weight: lighter;
		font-style: normal;
	}
</style>
