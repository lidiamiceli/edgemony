import { DELETE, GET, PATCH, POST, PUT } from "./api-calls.js";


const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const inputSearchById = document.querySelector('.check-id');
const buttonSearchById = document.querySelector('.check-id-button');

let productId = "";

buttonSearchById.addEventListener('click', async (e) => {
    e.preventDefault();
    productId = inputSearchById.value.trim();
    if (!productId) {
      alert('Inserisci un ID valido');
      return;
    }
  
    try {
        const product = await GET(productId);
        if (!product || product.error) {
          alert('Prodotto non trovato');
          return;
        }
        inputTitleEl.value = product.title;
    inputPriceEl.value = product.price;
    inputDescriptionEl.value = product.description;
    inputCategoryEl.value = product.category.id;
    inputImagesEl.value = product.images[0];
    
     } catch (error) {
    console.error('Errore durante la ricerca del prodotto:', error);
    alert('Errore durante la ricerca del prodotto');
  }
});

buttonSendEl.addEventListener('click', async (e) => {
    e.preventDefault();
  
    const updateProduct = {
      title: inputTitleEl.value.trim(),
      price: parseFloat(inputPriceEl.value.trim()),
      description: inputDescriptionEl.value.trim(),
      categoryId: parseInt(inputCategoryEl.value.trim(), 10),
      images: [inputImagesEl.value.trim()]
    };
  
    // Controlla che tutti i campi siano compilati
    if (!updateProduct.title || !updateProduct.price || !updateProduct.description || !updateProduct.categoryId || !updateProduct.images[0]) {
      alert('Tutti i campi sono obbligatori!');
      return;
    }
  
    try {
      const updatedProduct = await PUT(productId, updateProduct);
      console.log('Prodotto aggiornato:', updatedProduct);
      alert('Prodotto aggiornato con successo!');
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del prodotto:', error);
      alert('Errore durante l\'aggiornamento del prodotto');
    }
  });

const mainContainerEl = document.querySelector('.main-container');

const myUrl = new URL("https://api.escuelajs.co/api/v1/products/23?limit=8&offset=0")

console.log(myUrl)

console.log(myUrl.searchParams.set('miosearchparam', 'valoreasd'))
