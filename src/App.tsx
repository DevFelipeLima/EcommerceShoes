import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Container } from "react-bootstrap";
import { ShoppingContextProvider } from "./context/ShoppingContext";

function App() {
  return (
    <ShoppingContextProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingContextProvider>
  );
}

export default App;
