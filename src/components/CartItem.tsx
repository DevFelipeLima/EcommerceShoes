import { Button, Stack } from "react-bootstrap";
import { useShoppingContext } from "../context/ShoppingContext";
import ListProduct from "../data/productList.json";
import { FormatPricing } from "../helpers/FormatPricing";
import { BsCartX } from "react-icons/bs";

type CartItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingContext();
  const item = ListProduct.find((element) => element.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        alt=""
        style={{ height: 75, width: 125, objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.75rem" }}>
              {quantity}x
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatPricing(item.pricing)}
        </div>
      </div>
      <div> {FormatPricing(item.pricing * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        <BsCartX />
      </Button>
    </Stack>
  );
}
