import { Header } from "./components/Header";
import { Card } from "./components/Main";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div>
    <Card name="New in" url="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card name="Abbigliamento" url="https://images.unsplash.com/photo-1524275539700-cf51138f679b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card name="Calzature" url="https://images.unsplash.com/photo-1607893468743-faf167bd6307?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    </>
  );
}

export default App;