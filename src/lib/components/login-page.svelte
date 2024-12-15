<script lang="ts">
	import LoginForm from "$lib/components/login-form.svelte";
	import LightSwitch from "$lib/components/ui/lightSwitch/lightSwitch.svelte";
	import { goto } from "$app/navigation";
	import { auth } from "$lib/stores/auth";
	import { onMount } from "svelte";

	onMount(() => {
		const unsubscribe = auth.subscribe(value => {
			if (value) {
				goto("/");
			}
		});

		return unsubscribe;
	});
</script>

<div class="relative h-screen w-full">
	<div class="absolute right-4 top-4">
		<LightSwitch />
	</div>
	<div class="flex h-full w-full items-center justify-center px-4">
		<LoginForm />
	</div>
</div>