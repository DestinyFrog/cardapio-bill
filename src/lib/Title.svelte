<script lang="ts">
	let {
		title,
		color = "black"
	}: {
		title: string
		color: string
	} = $props()
</script>

<div class="title">
	<span style="border-color: {color}"></span>
	<h1 style="color: {color}">{@html title}</h1>
	<span style="border-color: {color}"></span>
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
		
		margin: 10px 0px;
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
	}
</style>
