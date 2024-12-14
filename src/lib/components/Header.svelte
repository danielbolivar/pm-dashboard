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
            <div class="h-8 w-8 rounded-full bg-gray-200"></div>
            <span class="font-medium">{userName}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1">
                <path d="m6 9 6 6 6-6"/>
            </svg>
        </div>

        <!-- Main Navigation -->
        <nav class="flex items-center space-x-6 ml-6">
            <a href="/" class="transition-colors hover:text-primary">Dashboard</a>
            <a href="/projects" class="text-muted-foreground transition-colors hover:text-primary">Projects</a>
            <a href="/tasks" class="text-muted-foreground transition-colors hover:text-primary">Tasks</a>
            <a href="/settings" class="text-muted-foreground transition-colors hover:text-primary">Settings</a>
        </nav>

        <!-- Light Switch -->
        <div class="ml-auto">
            <LightSwitch />
        </div>
    </div>
</header>