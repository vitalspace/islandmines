<script lang="ts">
  import News from "./news.svelte";
  import Stats from "./stats.svelte";
  let items = [
    {
      label: "News",
      icon: "/icons/news-publishing-svgrepo-com.svg",
      value: 1,
      component: News,
    },
    {
      label: "Stats",
      icon: "/icons/stats-svgrepo-com.svg",
      value: 2,
      component: Stats,
    },
    {
      label: "Pirates",
      icon: "/icons/cute-pirate-svgrepo-com.svg",
      value: 3,
      component: Stats,
    },
    {
      label: "Pirate ships",
      icon: "/icons/galleon-svgrepo-com.svg",
      value: 4,
      component: Stats,
    },
    {
      label: "Islands",
      icon: "/icons/island-svgrepo-com.svg",
      value: 5,
      component: Stats,
    },
    {
      label: "Market Place",
      icon: "",
      value: 6,
      component: Stats,
    },
    {
      label: "Pirates",
      icon: "/icons/cute-pirate-svgrepo-com.svg",
      value: 7,
      component: Stats,
    },
    {
      label: "Pirate ships",
      icon: "/icons/galleon-svgrepo-com.svg",
      value: 8,
      component: Stats,
    },
  ];
  let activeTabValue = 1;
  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<div
  class="fixed h-screen w-72 -translate-x-full bg-gray-800 pt-[6.5rem] text-white transition-transform md:translate-x-0"
>
  <div class="text-center">
    <header class="py-10">
      <h2 class="text-4xl">Play</h2>
    </header>
  </div>
  <div class="flex flex-wrap space-y-4">
    {#each items as item}
      {#if item.value !== 6}
        <button
          on:click={handleClick(item.value)}
          class="flex w-full items-center space-x-4 px-8 py-2
          {activeTabValue === item.value ? 'bg-purple-500' : 'hover:bg-slate-700'}"
        >
          <img class="h-8 w-8" src={item.icon} alt="" />
          <span>{item.label}</span>
        </button>
      {/if}
      {#if item.value == 6}
        <div class="text-center w-full">
          <header class="py-10">
            <h2 class="text-2xl">{item.label}</h2>
          </header>
        </div>
      {/if}
    {/each}
  </div>
</div>

{#each items as item}
  {#if activeTabValue == item.value}
    <svelte:component this={item.component} />
  {/if}
{/each}
