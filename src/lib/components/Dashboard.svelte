<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchMachines, fetchNodes, fetchStorage } from '$lib/services/machines';
    import { writable } from 'svelte/store';
  
    interface Machine {
      name: string;
      type: string;
      status: string;
    }

    interface Node {
      node: string;
      status: string;
    }

    interface Storage {
      storage: string;
      status: string;
      node: string;
    }

    const machines = writable<Machine[]>([]);
    const nodes = writable<Node[]>([]);
    const storage = writable<Storage[]>([]);
    const loading = writable(true);
  
    onMount(async () => {
      try {
        const [machinesData, nodesData, storageData] = await Promise.all([
          fetchMachines(),
          fetchNodes(),
          fetchStorage()
        ]);
        machines.set(machinesData.data);
        nodes.set(nodesData.data);
        storage.set(storageData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.set(false);
      }
    });
  </script>
  
  <div>
    {#if $loading}
      <p>Loading...</p> <!-- Aquí puedes implementar un esqueleto de carga más complejo -->
    {:else}
      <h1>Dashboard Overview</h1>
      <h2>Machines</h2>
      <ul>
        {#each $machines as machine}
          <li>{machine.name} - {machine.type} - {machine.status}</li>
        {/each}
      </ul>
  
      <h2>Nodes</h2>
      <ul>
        {#each $nodes as node}
          <li>{node.node} - {node.status}</li>
        {/each}
      </ul>
  
      <h2>Storage</h2>
      <ul>
        {#each $storage as store}
          <li>{store.storage} - {store.status} - {store.node}</li>
        {/each}
      </ul>
    {/if}
  </div>