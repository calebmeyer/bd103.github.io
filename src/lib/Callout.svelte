<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    kind: "note" | "tip" | "important" | "warning" | "caution";
    body: Snippet;
  }

  const { kind, body }: Props = $props();

  // Capitalize the first letter of `kind` to make the title. Thank you
  // <https://stackoverflow.com/a/42755730>!
  const title = $derived(kind[0].toUpperCase() + kind.substring(1));
</script>

<div class="callout">
  <strong class="title">{title}</strong>
  <div>{@render body()}</div>
</div>

<style>
  .callout {
    background-color: var(--sand-darker);
    box-shadow: 0.5em 0.5em 0 var(--turquoise-darker);
    padding: 1em 1em;
  }
</style>
