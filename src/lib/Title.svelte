<script lang="ts">
	let { title, color = "black" }: {
		title: string
		color: string
	} = $props()
</script>

<div class="title">
	<span style="border-color: {color}"></span>
	<h1 style="color: {color}">{ title }</h1>
	<span style="border-color: {color}"></span>
</div>

<style scoped>
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;

		font-family: "Comic Relief", system-ui;
		font-weight: 400;
		font-style: normal;
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
	}
</style>
