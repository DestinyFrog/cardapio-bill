<script lang="ts">
	import Cardapio from "./lib/Cardapio.svelte";
	import Carrinho from "./lib/Carrinho.svelte";

	let tela: "cardapio" | "carrinho" = "cardapio";
</script>

<header>
	<h1>BAR DO BILL</h1>

	<nav>
		<button on:click={() => (tela = "cardapio")}>Cardápio</button>
		<button on:click={() => (tela = "carrinho")}>Carrinho</button>
	</nav>
</header>

<main>
	{#if tela == "cardapio"}
		<Cardapio></Cardapio>
	{:else if tela == "carrinho"}
		<Carrinho></Carrinho>
	{/if}
</main>

<style>
	header {
		background-color: #1a1a1a;
		color: aliceblue;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: sticky;
		margin-bottom: 14px;
	}

	header h1 {
		padding: 8px 20px;
		text-align: center;
	}

	nav {
		display: flex;
	}

	nav button {
		width: 100%;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		cursor: pointer;
	}

	main {
		display: flex;
		justify-content: center;
		width: 100%;
	}
</style>
