import React from "react";
import "./App.module.css";
import Layout from "./components/Layout";
import ListItem from "./components/ListItem";

const list = [
  {
    id: 1,
    name: "Nike",
    photo: "https://via.placeholder.com/150",
    description: "The Nike Air Max 90 stays true to its OG roots with its iconic Waffle sole, stitched overlays and classic TPU accents.",
  },
  {
    id: 2,
    name: "Adidas",
    photo: "https://via.placeholder.com/150",
    description: "The Adidas Ultraboost offers comfort and performance, making it ideal for long runs and casual wear.",
  },
  {
    id: 3,
    name: "Puma",
    photo: "https://via.placeholder.com/150",
    description: "The Puma Suede Classic is a timeless sneaker that has a sleek, low-profile look and a comfortable fit.",
  },
  {
    id: 4,
    name: "Converse",
    photo: "https://via.placeholder.com/150",
    description: "The Converse Chuck Taylor is an all-time favorite that combines a classic look with a durable canvas upper.",
  },
  {
    id: 5,
    name: "Reebok ",
    photo: "https://via.placeholder.com/150",
    description: "The Reebok Classic Leather is a versatile sneaker with a premium leather upper and a timeless silhouette.",
  },
];

function App() {
  return (
    <div className="App">
      <Layout>
        <ul>
          {list.map((item) => (
            <ListItem key={item.id} todo={item} />
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export default App;
