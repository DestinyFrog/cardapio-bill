<script lang="ts">
	import type { TipoPrato, Prato } from "./Cardapio";
	import { carrinho } from "./CarrinhoStore.svelte";
	import { formatarValor } from "./Functions";

	let { tipo }: { tipo: TipoPrato } = $props();

	function adicionarAoCarrinho(prato:Prato) {
		carrinho.push(prato.id)
	}
</script>

<div class="menu">
	<img class="menu-bg" src="images/{tipo.imagem}" alt="Plano de Fundo {tipo.titulo}" />

	<div>
		<h1>{tipo.titulo}</h1>

		{#each tipo.pratos as prato}
			<div class="menu-item">
				<img
					src="images/{prato.imagem}"
					alt="noimage"
				/>
				<div>
					<h3>{prato.nome}</h3>
					<p>{formatarValor(prato.valor)}</p>
				</div>
				<button onclick={() => adicionarAoCarrinho(prato)}>
					Adicionar ao Carrinho
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	.menu {
		padding: 0;
		margin: 0;
		width: 90%;
		height: auto;
		background-color: rgb(99, 99, 99);
		border-radius: 8px;
		border: 0;
		margin-bottom: 20px;
		overflow: hidden;
		position: relative;
	}

	.menu-bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -10;
		width: 100%;
		opacity: 40%;
	}

	.menu div {
		height: min-content;
		background-color: rgb(65, 70, 74);
		padding: 10px;
		transition: padding 1s;
		transition: background-color 1s;
		z-index: 10;
	}

	.menu-item {
		display: flex;
		flex-direction: row;
		text-align: left;
		margin: 3px;
		overflow: hidden;
		border-radius: 8px;
		z-index: 10;
		background-color: rgb(102, 101, 99);
	}

	.menu-item * {
		z-index: 10;
	}

	.menu-item img {
		max-width: 60px;
		object-fit: cover;
	}

	.menu-item div {
		width: 100%;
		padding: 8px;
		background-color: rgb(65, 70, 74);
	}
</style>
