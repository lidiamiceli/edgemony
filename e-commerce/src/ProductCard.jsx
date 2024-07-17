import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border p-4 rounded-custom bg-gray-100">
        <h2 className="text-lg font-kumbh">{product.title}</h2>
        <p>Prezzo: ${product.price}</p>
        <div className="flex justify-center mt-8">
          <button className="bg-green-500 text-white px-6 py-2 font-kumbh rounded-custom  hover:bg-green-700" 
          onClick={() => addToCart(product)}>
            Aggiungi al carrello
          </button>
        </div>
      </div>
    );
  };
  

export default ProductCard;
