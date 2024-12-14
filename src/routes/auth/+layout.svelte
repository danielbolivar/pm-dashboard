<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import { auth } from "$lib/stores/auth";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<ModeWatcher />
{@render children()}
