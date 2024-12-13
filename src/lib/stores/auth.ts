import { writable } from 'svelte/store';

interface AuthData {
    username: string;
    ticket: string;
    CSRFPreventionToken: string;
}

function createAuthStore() {
    const { subscribe, set, update } = writable<AuthData | null>(null);

    return {
        subscribe,
        login: (authData: AuthData) => set(authData),
        logout: () => set(null),
    };
}

export const auth = createAuthStore(); 