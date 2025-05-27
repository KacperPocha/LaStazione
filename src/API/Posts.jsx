const API_KEY = import.meta.env.VITE_API_KEY;


console.log("API_KEY:", API_KEY);


export async function fetchPizza() {
    const response = await fetch('https://api.lastazionepizzeria.pl/api/lastaziones?populate=*', {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.json();
}

export async function fetchToppings() {
    const response = await fetch('https://api.lastazionepizzeria.pl/api/lastazione-dodatkis?populate=*', {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.json();
}

export async function fetchHours() {
    const response = await fetch('https://api.lastazionepizzeria.pl/api/la-stazione-godzinies?populate=*', {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.json();
}
