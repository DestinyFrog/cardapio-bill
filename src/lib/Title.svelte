<script lang="ts">
	let {
		title, left = false
	}: {
		title: string,
		left?: boolean
	} = $props()
</script>

<div class="title">
	{#if !left}
		<div class="lines"
			style="border-right: 4px solid var(--main-menu-color);">
		</div>
	{/if}

	<h1>{@html title}</h1>

	{#if left}
		<div class="lines"
			style="border-left: 4px solid var(--main-menu-color);">
		</div>
	{/if}
</div>

<style scoped>
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;

		font-family: "Winky Rough", sans-serif;
		font-optical-sizing: auto;
		font-weight: lighter;
		font-style: normal;
		
		border-bottom: 4px solid var(--main-menu-color);
		color: var(--text-menu-color);
	}

	.title span {
		width: 100%;
		border-bottom: 4px dotted;
		box-sizing: border-box;
		margin: 0px 6px;
	}

	.title h1 {
		white-space: initial;
		min-width: max-content;
		text-align: right;
		font-size: 2.5rem;
		padding: 0 20px;
	}

	.lines {
		background-image: url('/static/lines.png');
		background-size: 16px;
		width: 100%;
		height: 60px;
	}
</style>
