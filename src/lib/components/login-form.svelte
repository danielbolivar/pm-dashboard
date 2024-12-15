<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { Input } from "$lib/components/ui/input/index.js";
	import { Label } from "$lib/components/ui/label/index.js";
	import { Loader2 } from "lucide-svelte";
	import { login } from "$lib/services/auth";
	import { auth } from "$lib/stores/auth";
	import { goto } from "$app/navigation";

	let username = "";
	let password = "";
	let error = "";
	let loading = false;

	async function handleSubmit() {
		loading = true;
		error = "";
		
		try {
			const response = await login({ username, password });
			auth.login(response.data);
			goto("/dashboard");
		} catch (e) {
			error = "Invalid credentials";
		} finally {
			loading = false;
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-2xl">Login</Card.Title>
			<Card.Description>Enter your credentials below to login to your account</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="user">Username</Label>
					<Input 
						id="user" 
						type="text" 
						bind:value={username}
						placeholder="username" 
						required 
					/>
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
					</div>
					<Input 
						id="password" 
						type="password" 
						bind:value={password}
						required 
					/>
				</div>
				{#if error}
					<p class="text-red-500 text-sm">{error}</p>
				{/if}
				<Button type="submit" class="w-full" disabled={loading}>
					{#if loading}
						<Loader2 class="mr-2 h-4 w-4 animate-spin" />
						<span>Loading...</span>
					{:else}
						Login
					{/if}
				</Button>
			</div>
		</Card.Content>
	</Card.Root>
</form>
