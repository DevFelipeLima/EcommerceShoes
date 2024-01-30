import { Button, Card } from "react-bootstrap";
import { FormatPricing } from "../helpers/FormatPricing";
import { BsCartDash, BsCartPlus } from "react-icons/bs";
import { useShoppingContext } from "../context/ShoppingContext";
import moment from "moment";

type ProductProps = {
  id: number;
  name: string;
  dateInclusion: Date;
  description: string;
  pricing: number;
  image: string;
};

export function Product({
  id,
  name,
  description,
  pricing,
  dateInclusion,
  image,
}: ProductProps) {
  const { getItemQtt, increaseCartQtt, decreaseCartQtt, removeFromCart } =
    useShoppingContext();
  const cartQtd = getItemQtt(id);
  const formatedDate = moment(dateInclusion).format("DD-MM-YYYY");

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-1">
          <h5 className="fs-4">{name}</h5>
          <h5 className="fs-4">{FormatPricing(pricing)}</h5>
        </Card.Title>
        <div className="mt-auto">
          <div
            className="d-flex align-items-baseline justify-content-start"
            style={{
              gap: "0.5rem",
              fontSize: "1rem",
              marginBottom: 8,
            }}
          >
            {description}
            <p style={{ fontSize: "0.8rem", marginLeft: 24 }}>
              Inclusão: {formatedDate}
            </p>
          </div>
          {cartQtd === 0 ? (
            <Button
              variant="secondary"
              className="w-100"
              onClick={() => increaseCartQtt(id)}
            >
              <div className="d-flex align-items-center justify-content-center">
                <BsCartPlus />
                <span style={{ marginLeft: 15 }}>Adicionar ao Carrinho</span>
              </div>
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  variant="secondary"
                  title="Remover um item do carrinho"
                  onClick={() => decreaseCartQtt(id)}
                >
                  <BsCartDash />
                </Button>
                <div>
                  <span
                    className="fs-4"
                    style={{ fontWeight: "bolder", marginRight: "0.5rem" }}
                  >
                    {cartQtd}
                  </span>
                  no carrinho
                </div>
                <Button
                  variant="secondary"
                  title="Adicionar mais um item ao carrinho"
                  onClick={() => increaseCartQtt(id)}
                >
                  <BsCartPlus />
                </Button>
                <Button
                  variant="danger"
                  title="Remover as quantidades deste produto do carrinho"
                  onClick={() => removeFromCart(id)}
                >
                  Remover
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
