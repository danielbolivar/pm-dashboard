<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import { auth } from "$lib/stores/auth";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();

	onMount(() => {
		const unsubscribe = auth.subscribe(value => {
			if (!value && $page.url.pathname !== "/auth") {
				goto('/auth');
			}
		});
	});
</script>

<ModeWatcher />
{#if $page.url.pathname !== "/auth"}
	<Header/>
{/if}





{@render children()}