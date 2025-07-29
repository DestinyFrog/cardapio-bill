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

		<!-- <div class="texto"> -->
			<!-- <a class="endereco" href="https://maps.app.goo.gl/BYZD375CyuCa4T149" target="_blank"> -->
				<!-- Assis Valente, 214 - Jardim Pinhal<br />Guarulhos - SP -->
			<!-- </a> -->
		<!-- </div> -->
	</div>

	<div class="column-triangle-horiz"></div>
</header>

<main>
	<div class="menu">
		<div class="menu-inside">

			<Title title="Batata Frita" />

			<div class="menu-content">
				{#each menuByTipos.get("batata-frita")! as item}
					<MenuItem {item} />
				{/each}
			</div>

		</div>
	</div>

	<div class="menu">
		<div>
			<div class="menu-inside">

				<Title title="Espetinho" left />

				<div class="menu-content">
					{#each menuByTipos.get("espetinho")! as item}
						<MenuItem {item} />
					{/each}
				</div>

			</div>
		</div>
	</div>

	<div class="menu">
		<div>
			<div class="menu-inside">

				<Title title="Bebidas" />

				<div class="menu-content">
					{#each menuByTipos.get("bebida")! as item}
						<MenuItem {item} />
					{/each}
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
		justify-content: center;
	}

	.logo {
		object-fit: contain;
		max-height: 160px;
		margin-top: 10px;
		width: 280px;
	}

	main {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.menu {
		max-width: 500px;
		width: 90%;
		border: 4px solid var(--main-menu-color);
		border-radius: 10px;
		margin: 10px 0px;
	}

	.menu-content {
		padding: 10px;
	}
</style>
