<script lang="ts">
    import Scene from "../componets/scene.svelte";
</script>

<section
class="fixed inset-0 mx-auto flex items-center justify-around text-center h-screen bg-gradient-to-br from-[#e7b6cf] via-red-200 to-[#2cc5bd] text-white"
>
<div class="flex mx-8 md:w-96 flex-col space-y-4 text-left">
  <p class="text-pink-100 font-bold">Launching Soon...</p>
  <h1 class="text-9xl">Island Mines</h1>
  <p>
    Don’t miss out on the release of our new NFT. Sign up below to receive
    updates when we go live.
  </p>
  <button class="rounded-full border-2 px-4 py-2 text-xl">Sing up</button>
</div>
<div id="test" class="cursor-pointer hidden md:flex">
  <Scene canvasWidth={800} canvasheith={500}/>
</div>
</section>