const BASE_URL = "https://api.escuelajs.co/"


const GET = async (id = '') => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}?limit=8&offset=0`)

    const data = await res.json();

    return data
}

const POST = async (object) => {
    const res = await fetch(BASE_URL + "api/v1/products", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    });

    const data = await res.json();

    return data;
}

const PUT = async (id, object) => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })

    const data = await res.json();

    return data
}

const PATCH = async (id, object) => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })

    const data = await res.json();

    return data
}

const DELETE = async (id) => {
    const res = await fetch(BASE_URL + `api/v1/products/${id}`, {
        method: "DELETE"
    })

    const data = res.json();

    return data
}

export {
    GET, POST, PATCH, DELETE, PUT
}