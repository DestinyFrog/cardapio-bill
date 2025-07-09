<script lang="ts">
  import { type TipoPrato } from "./Cardapio";
  import { formatarValor } from "./Functions";

  let { tipo }: { tipo: TipoPrato } = $props();

  let open_menu = $state(false);

  function invertMenu() {
    open_menu = !open_menu;
  }
</script>

<button class="menu" onclick={invertMenu}
    style="background-image: url('images/batata_frita.jpg') ;">
  <h1 class={open_menu ? "open-menu" : "closed-menu"}>
    {tipo.titulo}
  </h1>

  {#if open_menu}
    {#each tipo.pratos as prato}
      <div class="menu-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="noimage"
        />
        <div>
            <h3>{prato.nome}</h3>
            <p>{formatarValor(prato.valor)}</p>
        </div>
      </div>
    {/each}
  {/if}
</button>

<style>
  .menu {
    padding: 0;
    margin: 0;
    width: 80%;
    background-color: rgb(99, 99, 99);
    border-radius: 8px;
    border: 0;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .menu h1 {
    transition: height 1s;
    transition: padding 1s;
    transition: background-color 1s;
  }

  .open-menu {
    height: min-content;
    background-color: rgb(65, 70, 74);
    padding: 10px;
  }

  .closed-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    text-align: left;
    margin: 10px;
    overflow: hidden;
    border-radius: 8px;
  }

  .menu-item img {
    width: 70px;
  }

  .menu-item div {
    width: 100%;
    padding: 8px;
    background-color: rgb(65, 70, 74);
  }
</style>
