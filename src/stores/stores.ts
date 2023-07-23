import { writable } from "svelte/store";
export let isConnected = writable(false);
export let idBlockChainUser = writable()