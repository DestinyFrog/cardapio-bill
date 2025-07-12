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

	<aside class="transition-img">
		<!-- <img class="img-espetinho" src="/static/espetinho_session.png" alt="foto espetinho" /> -->
	</aside>

	<div class="menu-espetinho">
		<div class="menu-inside">
			<Title title="Espetinho" {color} />
			{#each menuByTipos.get("espetinho")! as item}
				<MenuItem {item} {color} />
			{/each}
		</div>
	</div>

	<div class="menu-bebida">
		<div class="menu-inside">
			<Title title="Bebida" {color} />
			{#each menuByTipos.get("bebida")! as item}
				<MenuItem {item} {color} />
			{/each}
		</div>
	</div>

	<Total />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}

	.img-espetinho {
		margin-top: -83px;
		margin-bottom: -72px;
	}

	.menu-inside {
		padding: 20px;
	}
</style>
