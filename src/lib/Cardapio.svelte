<script lang="ts">
    import { onMount } from "svelte";
    import { getCardapio, type prato } from "./Cardapio";
    import { formatarValor } from "./Functions";

    let pratos: prato[]|null = $state(null);
    onMount(() => getCardapio().then(data => pratos = data.pratos))
</script>

<div class="container">
    {#if pratos}
        {#each pratos as prato}
            <p>{ prato.nome }</p>
            <p>{ formatarValor(prato.valor) }</p>
        {/each}
    {/if}
</div>