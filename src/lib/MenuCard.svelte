<script lang="ts">
	import type { TipoPrato } from "./Cardapio";
	import Prato from "./Prato.svelte";

	let {
		tipo
	}: {
		tipo: TipoPrato;
	} = $props();
</script>

<div class="menu">
	<div>
		<h1>{tipo.titulo}</h1>

		{#each tipo.pratos as prato}
			<Prato {prato}></Prato>
		{/each}				
	</div>
</div>

<style>
	.menu {
		font-family: "Courier New", Courier, monospace;
	}

	.menu h1 {
		text-align: left;
	}
</style>
