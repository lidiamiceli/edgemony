const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');

buttonSendEl.addEventListener('click', e => {
    e.preventDefault();
    const objProductForm = {
        title: inputTitleEl.value,
        price: inputPriceEl.value,
        description: inputDescriptionEl.value,
        categoryId: inputCategoryEl.value,
        images: [inputImagesEl.value]
    };

    POST(objProductForm)
})

const BASE_URL = "https://api.escuelajs.co/";

const getProductEndpoint = "api/v1/products";


const deleteById = async (id) => {
    const res = await fetch(`${BASE_URL}${getProductEndpoint}/${id}`, {
        method: "DELETE"
    })

    const data = await res.json()

    console.log(data)
}

const POST = async (product) => {
  const res = await fetch(`https://fakestoreapi.com/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const data = await res.json();

  

  return data.id;
};

