<script lang="ts">
  import Cardapio from "./lib/Cardapio.svelte";
  import Carrinho from "./lib/Carrinho.svelte";

    
</script>

<header>
  <h1>BAR DO BILL</h1>
  
  <nav>
    <button>Cardápio</button>
    <button>Carrinho</button>
  </nav>
</header>

<main>  
  <Cardapio></Cardapio>
  <Carrinho></Carrinho>
</main>

<footer>
  
</footer>

<style>

</style>
