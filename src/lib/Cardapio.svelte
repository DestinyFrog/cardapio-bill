<script lang="ts">
	import { getCardapio } from "./Cardapio";
	import PratoCard from "./PratoCard.svelte";
</script>

{#await getCardapio()}
	<p>Carregando ...</p>
{:then tipos}
	<div class="cards">
		{#each tipos as tipo}
			<PratoCard {tipo} />
		{/each}
	</div>
{:catch error}
	<p class="error">Não foi possível carregar o cardápio</p>
{/await}

<style>
	.cards {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
