<script lang="ts">
  import { isConnected, idBlockChainUser } from "../../stores/stores";

  (async () => {
    if (!window.ethereum) {
      return;
    }

    const account = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (account.length > 0) {
      $isConnected = true;
      $idBlockChainUser = account[0];
    }
  })();

  const singUp = async () => {
    try {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (account.length > 0) {
        $idBlockChainUser = account[0];
        $isConnected = true;
      }

      console.log(account);
    } catch (error) {
      console.error(error);
    }
  };
</script>

{#if !$isConnected}
  <button
    on:click={() => singUp()}
    class="rounded-full border-2 px-4 py-2 text-xl">Sing up</button
  >
{/if}
