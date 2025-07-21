<script lang="ts">
	import { carrinho } from "./CarrinhoStore.svelte"
	import { formatarValor } from "./Functions"
	import type { Item } from "./Menu"

	const {
		item,
		color = "white"
	}: {
		item: Item
		color?: string
	} = $props()
</script>

<div class="menu-item" style="color: {color}">
	<button
		class="action"
		style="color: {color}; border-color: {color}"
		onclick={() => carrinho.add(item)}>+</button
	>
	<span class="nome">{item.nome}</span>
	<span class="line" style="border-color: {color}"></span>
	<span class="preco">{formatarValor(item.preco)}</span>
</div>

<style scoped>
	.menu-item {
		margin-top: 10px;
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;
		flex-wrap: nowrap;
		margin: 8px 0px;

		font-size: 0.85rem;
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		font-weight: 600;
		color: white;
	}

	.menu-item .nome {
		white-space: initial;
		min-width: max-content;
		text-align: right;
	}

	.menu-item .line {
		margin: 2px 4px;
		height: 14px;
		width: 100%;
		border-bottom: 2px dotted;
		box-sizing: border-box;
	}

	.menu-item .preco {
		white-space: initial;
		min-width: max-content;
		text-align: right;
	}

	.menu-item .action {
		min-width: 18px;
		height: 18px;

		margin-right: 8px;
		border: 2px solid white;
		color: white;
		background-color: transparent;

		display: flex;
		justify-content: center;
		border-radius: 4px;

		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	}
</style>
