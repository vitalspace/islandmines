<script lang="ts">
  import Scene from "./componets/scene.svelte";
</script>

<div
  class="absolute inset-0 h-screen bg-gradient-to-br from-[#e7b6cf] via-red-200 to-[#2cc5bd] text-white"
>
  <header class="relative z-10">
    <nav class="container mx-auto flex justify-end py-10">
      <ul class="flex space-x-10 pr-32">
        <li><a class="cursor-pointer" href="/">Home</a></li>
        <li><a class="cursor-pointer" href="/">Play</a></li>
        <li><a class="cursor-pointer" href="/">Buy $CIM</a></li>
        <li><a class="cursor-pointer" href="/">Community</a></li>
        <li><a class="cursor-pointer" href="/">Whitepaper</a></li>
      </ul>
    </nav>
  </header>
  <section
    class="fixed inset-0 mx-auto flex items-center justify-around border-2 border-red-300 text-center"
  >
    <div class="flex w-96 flex-col space-y-4 text-left">
      <p class="text-pink-100 font-bold">Launching Soon...</p>
      <h1 class="text-9xl">Island Mines</h1>
      <p>
        Don’t miss out on the release of our new NFT. Sign up below to receive
        updates when we go live.
      </p>
      <button class="rounded-full border-2 px-4 py-2 text-xl">Sing up</button>
    </div>
    <div id="test" class="cursor-pointer">
      <Scene canvasWidth={800} canvasheith={500}/>
    </div>
  </section>
</div>
