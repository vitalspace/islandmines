<script lang="ts">
  import Play from "../componets/play/play.svelte";
  import { isTheMenuTransparent } from "../stores/stores";
  $isTheMenuTransparent = false;
</script>

<Play />
