<script lang="ts">
	import Cardapio from "./lib/Cardapio.svelte";
</script>

<header>
	<h1>BAR DO BILL</h1>
</header>

<main>
	<Cardapio></Cardapio>
</main>

<style>
	header {
		background-color: #1a1a1a;
		color: aliceblue;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: sticky;
	}

	header h1 {
		padding: 8px 20px;
		text-align: center;
	}

	main {
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 10px;
	}
</style>
