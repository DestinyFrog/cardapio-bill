<script lang="ts">
	import { carrinho } from "./CarrinhoStore.svelte"
	import { formatarValor } from "./Functions"
	import type { Item } from "./Menu"

    let { item, color = "white" }: {
        item: Item,
		color: string
    } = $props()
</script>

<div class="menu-item" style="color: {color}">
	<button class="action" style="color: {color}; border-color: {color}"
		onclick={ () => carrinho.add(item) }>+</button>
	<span class="nome">{ item.nome }</span>
	<span class="line" style="border-color: {color}"></span>
	<span class="preco">{ formatarValor( item.preco ) }</span>
</div>

<style scoped>
	.menu-item {
		margin-top: 10px;
	}
</style>