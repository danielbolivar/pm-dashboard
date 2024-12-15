<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";

	function goHome() {
		goto('/');
	}
</script>

<div class="flex flex-col items-center justify-center h-screen">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-4">404</h1>
	<p class="text-lg text-muted-foreground pb-4">The page you are looking for does not exist.</p>
    <Button
          href='/'
          variant="default"
    >
        Go back to Home
</Button>
</div> 