<!-- App.svelte -->
<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { idBlockChainUser, isTheMenuTransparent } from "./stores/stores";
  import Home from "./routes/Home.svelte";
  import Play from "./routes/Play.svelte";
  import Buy from "./routes/Buy.svelte";
  import Whitepaper from "./routes/Whitepaper.svelte";
  import Community from "./routes/Community.svelte";
</script>

<Router>
  <header class="fixed w-full {$isTheMenuTransparent ?  "bg-none" : "bg-gray-800"} z-10">
    <nav
      class="hidden container mx-auto md:flex justify-between py-10 text-white items-center"
    >
      <h2 class="pl-2">
        Welcome back Friend
        {#if $idBlockChainUser}
          {$idBlockChainUser.slice(0, 20)}
        {/if}
      </h2>
      <ul class="flex space-x-10">
        <li><Link class="cursor-pointer" to="/">Home</Link></li>
        <li><Link class="cursor-pointer" to="/play">Play</Link></li>
        <li><Link class="cursor-pointer" to="/buy">Buy $CIM</Link></li>
        <li><Link class="cursor-pointer" to="/community">Community</Link></li>
        <li><Link class="cursor-pointer" to="/whitepaper">Whitepaper</Link></li>
      </ul>
    </nav>
    <nav class="flex justify-between md:hidden">
      <a href="/">
        <img class="w-10 h-10" src="icons/burger-menu-svgrepo-com.svg" alt="" />
      </a>
      <button>
        <img class="w-10 h-10" src="icons/burger-menu-svgrepo-com.svg" alt="" />
      </button>
    </nav>
  </header>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/play"><Play /></Route>
    <Route path="/buy"><Buy /></Route>
    <Route path="/whitepaper"><Whitepaper /></Route>
    <Route path="/community"><Community /></Route>
  </div>
</Router>
