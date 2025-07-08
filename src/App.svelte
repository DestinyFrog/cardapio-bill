<script lang="ts">
  import Cardapio from "./lib/Cardapio.svelte";
  import Carrinho from "./lib/Carrinho.svelte";

  let menu: "cardapio" | "carrinho" = "cardapio"
</script>

<header>
  <h1>BAR DO BILL</h1>
  
  <nav>
    <button class="menu-button" on:click={ () => menu = "cardapio" }>Cardápio</button>
    <button class="menu-button" on:click={ () => menu = "carrinho" }>Carrinho</button>
  </nav>
</header>

<main>  
  {#if menu == "cardapio"}
    <Cardapio></Cardapio>
  {:else if menu == "carrinho"}
    <Carrinho></Carrinho>
  {/if}
</main>

<style>
  header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: gainsboro;
  }

  nav {
    display: flex;
    flex-direction: row;
  }
</style>
