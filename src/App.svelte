<script lang="ts">
	import { menuByTipos } from "./lib/Menu"
	import MenuItem from "./lib/MenuItem.svelte"
	import Title from "./lib/Title.svelte"
	import Total from "./lib/Total.svelte"

	const color_espetinho = "#960400"
	const color_batata_frita = "#ffffff"
	const color_bebida = "#fac60b"
</script>

<header>
	<div class="column-triangle-horiz"></div>
	<div class="line-triangle-2 down"></div>

	<div class="content">
		<h1>BAR DO BILL</h1>
		<a class="endereco" href="https://maps.app.goo.gl/BYZD375CyuCa4T149" target="_blank">
			Assis Valente, 214 - Jardim Pinhal<br />Guarulhos - SP
		</a>
	</div>

	<div class="line-triangle-2 up"></div>
	<div class="column-triangle-horiz"></div>
	<div class="line-triangle-2 down"></div>
</header>

<main>
	<div class="menu menu-batata-frita">
		<aside>
		<!-- <img src="/static/batata_frita.png" alt="foto de batata frita" /> -->
		</aside>

		<div class="column-triangle-horiz"></div>
		<div class="menu-inside" style="background-color: #f64619">
			<div class="column-triangle"></div>

			<div class="menu-content">
				<Title title="Batata Frita" color={color_batata_frita} />
				{#each menuByTipos.get("batata-frita")! as item}
					<MenuItem {item} color={color_batata_frita} />
				{/each}
				<Title title="&#9824;" color={color_batata_frita} />
			</div>

			<div class="column-triangle"></div>
		</div>
		<div class="column-triangle-horiz"></div>
	</div>

	<div class="menu menu-espetinho">
		<aside>
			<!-- <img src="/static/espetinho_session.png" alt="foto de espetinho" /> -->
		</aside>

		<div class="line-triangle-2 up"></div>
		<div class="column-triangle-horiz"></div>
		<div class="menu-inside" style="background-color: #fdaf29">
			<div class="line-triangle-2 down" style="position: absolute; top: 0px"></div>
			<div class="column-wave-1 left"></div>

			<div class="menu-content">
				<Title title="Espetinho" color={color_espetinho} />

				{#each menuByTipos.get("espetinho")! as item}
					<MenuItem {item} color={color_espetinho} />
				{/each}

				<Title title="&#9830;" color={color_espetinho} />
			</div>

			<div class="column-wave-1 right"></div>
			<div class="line-triangle-2 up" style="position: absolute; bottom: 0px"></div>
		</div>
		<div class="column-triangle-horiz"></div>
		<div class="line-triangle-2 down"></div>
	</div>

	<div class="menu menu-bebida">
		<aside>

		</aside>
		
		<div
			class="column-triangle-horiz"
			style="background-color: {color_bebida}; border-color: {color_bebida}"
		></div>

		<div class="menu-inside" style="background-color: #01562d">
			<div class="column-triangle"></div>

			<div class="menu-content">
				<Title title="Bebida" color={color_bebida} />
				{#each menuByTipos.get("bebida")! as item}
					<MenuItem {item} color={color_bebida} />
				{/each}
				<Title title="&#10022;" color={color_bebida} />
			</div>

			<div class="column-triangle"></div>
		</div>

		<div
			class="column-triangle-horiz"
			style="background-color: {color_bebida}; border-color: {color_bebida}"
		></div>
	</div>
</main>

<Total />

<style>
	header {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		font-weight: 600;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	header .content {
		padding: 20px 0px;
		text-align: center;
	}

	.endereco {
		margin-top: 3px;
		color: white;
		text-align: center;
	}

	main {
		width: 100%;
		height: 100%;
		/* background-image: url("/static/madeira.jpg"); */
		/* background-size: contain; */
		/* z-index: -10; */
	}

	.menu {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.menu-inside {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.menu aside {
		width: 100%;
		position: relative;
		/* backdrop-filter: blur(1px); */
		z-index: 2;
		min-height: 400px;
	}

	.menu .menu-content {
		margin: 10vw 10px 10vw 10px;
		width: 100%;
	}

	.column-triangle {
		width: 15px;
		background-image: url("/static/deco_triangle.png");
		background-repeat: repeat-y;
		background-size: contain;
	}

	.column-triangle-horiz {
		box-sizing: content-box;
		height: 15px;
		width: 100%;
		/* //todo improve deco */
		background-image: url("/static/deco_triangle_horiz.png");
		background-repeat: repeat-x;
		background-size: contain;
		background-color: #ec3a0d;
		border-top: 4px solid #ec3a0d;
		border-bottom: 4px solid #ec3a0d;
	}

	.column-wave-1 {
		width: 15px;
		height: 400px;
		background-image: url("/static/column_wave_1.png");
		background-repeat: repeat-y;
		background-size: contain;
		margin: 0px 4px;
	}

	.line-triangle-2 {
		box-sizing: content-box;
		height: 15px;
		width: 100%;
		background-image: url("/static/deco_trinagle_2.png");
		background-repeat: repeat-x;
		background-size: contain;
		z-index: 1;
	}

	.up {
		transform: rotateX(0deg);
	}

	.down {
		transform: rotateX(180deg);
	}

	.left {
		transform: rotateY(0deg);
	}

	.right {
		transform: rotateY(180deg);
	}

	.menu-espetinho aside {
		margin-top: -14vw;
		margin-bottom: -15vw;
	}

	.menu-batata-frita aside {
		margin-bottom: -10vw;
	}
</style>
