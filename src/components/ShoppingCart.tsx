import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingContext } from "../context/ShoppingContext";
import { CartItem } from "./CartItem";
import EmptyCart from "../assets/images/cart_empty.svg";

import ListProduct from "../data/productList.json";
import { FormatPricing } from "../helpers/FormatPricing";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { openCart, cartItems, checkoutCart } = useShoppingContext();
  return (
    <Offcanvas show={isOpen} onHide={openCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total:
              {FormatPricing(
                cartItems.reduce((total, cartItem) => {
                  const item = ListProduct.find((i) => i.id === cartItem.id);
                  return total + (item?.pricing || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: "0.3rem", marginTop: 150 }}
          >
            <img
              src={EmptyCart}
              alt=""
              style={{ marginLeft: 36, height: 175 }}
            />
            <div className="fs-6">Você ainda não tem nada no seu carrinho!</div>
          </div>
        )}
      </Offcanvas.Body>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ marginBottom: 8 }}
      >
        <Button
          disabled={cartItems.length === 0}
          variant="success"
          onClick={checkoutCart}
        >
          Finalizar Compra
        </Button>
      </div>
    </Offcanvas>
  );
}
