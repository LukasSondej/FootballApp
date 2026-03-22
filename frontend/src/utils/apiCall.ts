const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
type apiConfig<P = {}> = {
method: 'GET' | "PUT" | 'DELETE'| 'PATCH' | 'POST';
body?: P;
}

export const apiCall = async<R, P = {}>(url: string, config?: apiConfig<P>) => {
   const URL = import.meta.env.VITE_API_URL || "https://footballapp-production-e476.up.railway.app";
    const response = await fetch(`${URL}/${url}`, {
        method: config?.method || 'GET',
       headers: config?.body ? { 'Content-Type': 'application/json' } : undefined,
         body: config?.body ? JSON.stringify(config.body) : undefined
    })
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error API');
    }
    return response.json() as Promise<R>

}