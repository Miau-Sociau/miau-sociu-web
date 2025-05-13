export async function login(email: string, pwd: string) {
    // rota de exemplo alterar para rota real como: https:miau-social/api/login
    const res = await fetch('https://localhost:5001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email, pwd }),
    });

    if(!res.ok)
        throw new Error('Login falhou');

    const data = await res.json(); 

    localStorage.setItem('token', data.token); 

    return data;
}