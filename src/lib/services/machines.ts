import { get } from 'svelte/store';
import { auth } from '$lib/stores/auth';

const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;

const headers = () => {
    const authData = get(auth);
    return {
        'CSRFPreventionToken': authData?.CSRFPreventionToken || '',
        'Cookie': `PVEAuthCookie=${authData?.ticket}`
    };
};

export async function fetchMachines() {
    const response = await fetch(`${API_BASE}/api2/json/cluster/resources?type=vm`, {
        headers: headers(),
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to fetch machines');
    }
    return response.json();
}

export async function fetchNodes() {
    const response = await fetch(`${API_BASE}/api2/json/cluster/resources?type=node`, {
        headers: headers(),
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to fetch nodes');
    }
    return response.json();
}

export async function fetchStorage() {
    const response = await fetch(`${API_BASE}/api2/json/cluster/resources?type=storage`, {
        headers: headers(),
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Failed to fetch storage');
    }
    return response.json();
}