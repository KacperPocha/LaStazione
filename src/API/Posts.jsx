const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchPizza() {
    const response = await fetch('https://strapi.krysta.dev/api/lastaziones?populate=*', {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.json();
}

export async function fetchToppings() {
    const response = await fetch('https://strapi.krysta.dev/api/lastazione-dodatkis?populate=*', {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.json();
}

export async function fetchHours() {
    const response = await fetch('https://strapi.krysta.dev/api/la-stazione-godzinies?populate=*', {
        headers: { Authorization: `Bearer ${API_KEY}` }
    });
    return response.json();
}
