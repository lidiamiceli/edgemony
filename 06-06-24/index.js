function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('La risposta della rete non è stata ok' + response.statusText);
        }
        return response.json();
      })

      .then(data => {
        const productsContainer = document.getElementById('products-container');
        data.forEach(product => {
    
          const card = document.createElement('div'); //creo una card
          card.className = 'card';
  
         
          const title = document.createElement('h2'); //creo un titolo
          title.className = 'card-title';
          title.textContent = product.title;
  

          const price = document.createElement('p');
          price.className = 'card-price';
          price.textContent = `$${product.price}`;  // creo il prezzo
  
          
          card.appendChild(title); // mostro title e price nella card
          card.appendChild(price); 
  

          productsContainer.appendChild(card); //mostro le card del container
        });
      })

      .catch(error => {
        console.error('C\'è stato un problema con la tua operazione fetch:', error);
      });
  }
  
  window.onload = fetchProducts;
  