<script lang="ts">
	import { menuByTipos } from "./lib/Menu"
	import MenuItem from "./lib/MenuItem.svelte"
	import Title from "./lib/Title.svelte"
	import Total from "./lib/Total.svelte"

	let color = "white"
</script>

<header>
	<h1>BAR DO BILL</h1>
	<a class="endereco" href="https://maps.app.goo.gl/BYZD375CyuCa4T149" target="_blank">
		Assis Valente, 214 - Jardim Pinhal<br/>Guarulhos - SP
	</a>
</header>

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
	header {
		padding: 20px 0px;
		margin-top: 10px;
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		font-weight: 600;
		border-bottom: 2px solid white;
		width: 100%;
		margin-bottom: 10px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.endereco {
		margin-top: 3px;
		color: white;
		text-align: center;
	}

	main {
		width: 100%;
		height: 100%;
		max-width: 550px;
		padding-bottom: 200px;
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
