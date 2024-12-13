const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;
const API_URL = `${API_BASE}/api2/json/access/ticket`;

interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResponse {
    data: {
        username: string;
        ticket: string;
        CSRFPreventionToken: string;
        cap: Record<string, Record<string, number>>;
    };
}

export async function login(credentials: LoginCredentials) {
    const formData = new URLSearchParams();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data: LoginResponse = await response.json();
    return data;
} 