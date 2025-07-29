<script lang="ts">
	import { carrinho } from "./CarrinhoStore.svelte"
	import { formatarValor } from "./Functions"
	import type { Item } from "./Menu"

	const { item }: { item: Item } = $props()
</script>

<div class="menu-item">
	<button
		class="action"
		onclick={() => carrinho.add(item)}>+</button>
	<span class="nome">{item.nome}</span>
	<span class="line"></span>
	<span class="preco">{formatarValor(item.preco)}</span>
</div>

<style scoped>
	.menu-item {
		margin: 10px 3px 0px 3px;

		display: flex;
		align-items: end;
		width: 100%;
		justify-content: space-between;
		flex-wrap: nowrap;

		font-size: 0.85rem;
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		font-weight: 600;
		color: var(--text-menu-color);
	}

	.menu-item .nome {
		white-space: initial;
		text-align: left;
		text-wrap: wrap;
		width: 100%;
		padding-bottom: 4px;
		border-bottom: 2px dotted;
	}

	.menu-item .line {
		margin: 2px 4px;
		height: 14px;
		width: 0%;
		border-bottom: 2px dotted;
		box-sizing: border-box;
	}

	.menu-item .preco {
		white-space: initial;
		min-width: max-content;
		text-align: right;
		font-size: 1.1rem;
	}

	.menu-item .action {
		min-width: 18px;
		height: 18px;

		margin-right: 8px;
		border: 2px solid var(--text-menu-color);
		color: var(--text-menu-color);
		background-color: transparent;

		display: flex;
		justify-content: center;
		border-radius: 4px;

		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	}
</style>
