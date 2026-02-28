type apiConfig<P = {}> = {
method: 'GET' | "PUT" | 'DELETE'| 'PATCH' | 'POST';
body?: P;
}

export const apiCall = async<R, P = {}>(url: string, config?: apiConfig<P>) => {
    const URL = `http://localhost:3000`;
    const response = await fetch(`${URL}/${url}`, {
        method: config?.method || 'GET',
       headers: config?.body ? { 'Content-Type': 'application/json' } : undefined,
         body: config?.body ? JSON.stringify(config.body) : undefined
    })
    return response.json() as Promise<R>

}