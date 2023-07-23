<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  // import About from "./routes/About.svelte";
  // import Blog from "./routes/Blog.svelte";

  export let url = "/";
</script>

<Router {url}>
  <header class="relative z-10">
    <nav class="hidden container mx-auto md:flex justify-end py-10 text-white">
      <ul class="flex space-x-10 pr-32">
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
  </div>
</Router>
