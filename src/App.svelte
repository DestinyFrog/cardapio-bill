<script lang="ts">
	import { menuByTipos } from "./lib/Menu"
	import MenuItem from "./lib/MenuItem.svelte"
	import Title from "./lib/Title.svelte"
	import Total from "./lib/Total.svelte"

	let color = "white"
</script>

<main>
	<div class="menu menu-batata-frita">
		<div class="menu-inside">
			<Title title="Batata Frita" {color} />
			{#each menuByTipos.get("batata-frita")! as item}
				<MenuItem {item} {color} />
			{/each}
		</div>
	</div>

	<div class="menu menu-espetinho">
		<div class="menu-inside">
			<Title title="Espetinho" {color} />
			{#each menuByTipos.get("espetinho")! as item}
				<MenuItem {item} {color} />
			{/each}
		</div>
	</div>

	<div class="menu menu-bebida">
		<div class="menu-inside">
			<Title title="Bebida" {color} />
			{#each menuByTipos.get("bebida")! as item}
				<MenuItem {item} {color} />
			{/each}
		</div>
	</div>
</main>

<Total />

<style>
	main {
		width: 100%;
		height: 100%;
		padding-bottom: 300px;
	}

	.menu {
		display: flex;
		width: 100%;
	}

	.menu-inside {
		width: 100%;
		padding: 12px;
	}
</style>
