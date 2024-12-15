<script lang="ts">
    import LightSwitch from "$lib/components/ui/lightSwitch/lightSwitch.svelte";
    import { auth } from "$lib/stores/auth";
    import { onMount } from "svelte";

    let userName = "Guest";

    onMount(() => {
        const unsubscribe = auth.subscribe(value => {
            if (value) {
                userName = value.username;
            }
        });

        return unsubscribe;
    });
</script>

<header class="w-full border-b bg-white dark:bg-black dark:text-white dark:border-gray-600">
    <div class="container flex h-14 items-center px-4">
        <!-- Profile Section -->
        <div class="flex items-center gap-2">
            <span class="font-bold">{userName}</span>
        </div>

        <!-- Main Navigation -->
        <nav class="flex items-center space-x-6 ml-6">
            <a href="/dashboard" class="transition-colors hover:text-primary">Dashboard</a>
            <a href="/templates" class="text-muted-foreground transition-colors hover:text-primary">Templates</a>
            <a href="/machines" class="text-muted-foreground transition-colors hover:text-primary">Machines</a>
        </nav>

        <!-- Light Switch -->
        <div class="ml-auto">
            <LightSwitch />
        </div>
    </div>
</header>