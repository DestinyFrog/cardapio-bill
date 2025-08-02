<script lang="ts">
	import { carrinho } from "./CarrinhoStore.svelte"
	import { cortarString, formatarValor } from "./Functions"

	let itens = $derived(carrinho.getItens())
	let minimizado = $state(true)
</script>

<footer>
	<div class="conta">
		<button class="adesivo" onclick={() => (minimizado = !minimizado)}>Pedido</button>

		<table>
			<tbody>
				{#if minimizado}
					{#each itens as item}
						<tr>
							<td class="espaco"></td>
							<td style="width: 30px">{item.quantidade}x</td>
							<td style="width: 240px">{cortarString(item.nome, 34)}</td>
							<td style="width: 40px" class="numerico">{formatarValor(item.preco * item.quantidade)}</td>
						</tr>
					{/each}
				{:else}
					<tr>
						<td colspan="4" style="text-align: center">Ver Itens ...</td>
					</tr>
				{/if}
			</tbody>

			<tfoot>
				<tr>
					<td colspan="2"></td>
					<td>Total</td>
					<td class="numerico">{formatarValor(carrinho.total)}</td>
				</tr>
			</tfoot>
		</table>

		<a class="btn-pedido" href={carrinho.createLink()} target="_blank">Finalizar Pedido</a>
	</div>
</footer>

<style scoped>
	footer {
		background-color: hsl(65, 41%, 95%);
		border: 3px solid #a6a9aa;

		position: sticky;
		bottom: 0;
		margin: 0;
		margin-top: 40px;
	}

	footer * {
		font-family: "Edu NSW ACT Cursive", cursive;
		font-optical-sizing: auto;
		font-weight: lighter;
	}

	.adesivo {
		padding: 2px 30px;
		background-color: #f8e790;
		border: 1px solid #a6a9aa;
		position: absolute;
		left: 50%;
		top: -6%;
		transform: translate(-50%, -50%) rotate(2deg);
		color: black;

		font-style: normal;
		font-size: 1rem;
	}

	.conta {
		position: relative;
		border-radius: 2px;
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 405px;
	}

	.conta::before {
		content: "";
		position: absolute;
		height: 100%;
		width: 2px;
		border: 0;
		background-color: red;

		left: 50px;
	}

	table {
		min-width: 400px;
		padding: 10px;
	}

	td {
		font-style: italic;
		font-size: 0.8rem;
		color: black;

		padding: 6px;
		padding-bottom: 0;
		margin-left: 40px;
		border-bottom: 2px solid #9cbdd3;
	}

	.espaco {
		width: 40px;
	}

	.numerico {
		text-align: right;
	}

	.btn-pedido {
		border: 0;
		width: 90%;
		text-align: right;
		text-decoration: underline;
		background-color: transparent;
		color: black;
		font-style: italic;
	}
</style>
