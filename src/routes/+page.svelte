<script lang="ts">
	import { auth } from "$lib/stores/auth";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	onMount(() => {
		const unsubscribe = auth.subscribe(value => {
			if (!value) {
				goto("/auth");
			}
		});

		return unsubscribe;
	});
</script>

<div>
	<h1>Dashboard</h1>
	<!-- Aquí va el contenido de tu página principal -->
</div>
