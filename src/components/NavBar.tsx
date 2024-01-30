import { Navbar as NavBarbts, Container, Nav, Button } from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import Logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { useShoppingContext } from "../context/ShoppingContext";

export function NavBar() {
  const link = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About", link: "/about" },
  ];
  const { openCart, cartQty } = useShoppingContext();

  return (
    <NavBarbts sticky="top" className="bg-white shadow-sm mb-3">
      <Container className="Container">
        <div className="Logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="contantNavBar">
          <Nav className="navLink">
            {link.map((item, index) => (
              <NavLink to={item.link} key={index} className="menu-link">
                {item.name}
              </NavLink>
            ))}
          </Nav>
          <Button
            variant="outline-secondary"
            className="rounded-circle cartbutton"
            onClick={openCart}
          >
            <BsCart2 />
            {cartQty > 0 && (
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.2rem",
                  height: "1.2rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                {cartQty}
              </div>
            )}
          </Button>
        </div>
      </Container>
    </NavBarbts>
  );
}
