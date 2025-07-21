<script lang="ts">
	import { menuByTipos } from "./lib/Menu"
	import MenuItem from "./lib/MenuItem.svelte"
	import Title from "./lib/Title.svelte"
	import Total from "./lib/Total.svelte"
</script>

<header>
	<div class="column-triangle-horiz"></div>

	<div class="content">
		<img class="logo" src="/static/logo.png" alt="logo" />

		<div class="texto">
			<h1>BAR DO BILL</h1>
			<a class="endereco" href="https://maps.app.goo.gl/BYZD375CyuCa4T149" target="_blank">
				Assis Valente, 214 - Jardim Pinhal<br />Guarulhos - SP
			</a>
		</div>
	</div>

	<div class="column-triangle-horiz"></div>
</header>

<main>
	<div class="menu">
		<div class="menu-inside">
			<div class="menu-content">
				<Title title="Batata Frita" />

				{#each menuByTipos.get("batata-frita")! as item}
					<MenuItem {item} />
				{/each}

				<Title title="&#9830;" />
			</div>
		</div>
	</div>

	<div class="menu">
		<div>
			<div class="menu-inside">
				<div class="menu-content">
					<Title title="Espetinho" />

					{#each menuByTipos.get("espetinho")! as item}
						<MenuItem {item} />
					{/each}

					<Title title="&#9830;" />
				</div>
			</div>
		</div>
	</div>

	<div class="menu">
		<div>
			<div class="menu-inside">
				<div class="menu-content">
					<Title title="Bebidas" />

					{#each menuByTipos.get("bebida")! as item}
						<MenuItem {item} />
					{/each}

					<Title title="&#9830;" />
				</div>
			</div>
		</div>
	</div>
</main>

<Total />

<style>
	header {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		font-weight: 600;
		width: 100vw;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header .content {
		width: 100%;
		text-align: center;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background-color: black;
	}

	.endereco {
		margin-top: 3px;
		color: white;
		text-align: center;
	}

	.logo {
		object-fit: contain;
		max-height: 100px;
		margin-top: 10px;
		width: 180px;
	}

	.texto {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	main {
		width: 100%;
		height: 100%;
	}

	.menu {
		margin: 0px 20px;
	}
</style>
