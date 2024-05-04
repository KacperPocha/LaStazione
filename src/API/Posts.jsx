export async function fetchPizza() {
    const response = await fetch('https://strapi.krysta.dev/api/lastaziones?populate=*',{
        headers:{Authorization: `Bearer 608991bc5ced6b9b8aea139ea9da6cbec3b56051e0b12a468d413e88c8559466077aac6cb6012a619f0aa3e5276d71cbf83e32318040abb79077326947dd9d02920e2ecc5b7c0cb33aa25d034d6de6ff75a1e374f112cc66d4e77c807f1178938f1f860ae62a210007008fd4124f055996a7a1edc6f92aa3b79f19c7536ecfda`}
    });
    return response.json()
  }



  export async function fetchToppings() {
    const response = await fetch('https://strapi.krysta.dev/api/lastazione-dodatkis?populate=*',{
        headers:{Authorization: `Bearer 608991bc5ced6b9b8aea139ea9da6cbec3b56051e0b12a468d413e88c8559466077aac6cb6012a619f0aa3e5276d71cbf83e32318040abb79077326947dd9d02920e2ecc5b7c0cb33aa25d034d6de6ff75a1e374f112cc66d4e77c807f1178938f1f860ae62a210007008fd4124f055996a7a1edc6f92aa3b79f19c7536ecfda`}
    });
    return response.json()
  }