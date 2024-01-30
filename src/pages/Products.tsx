import { BsCaretDown, BsCaretUp, BsSearch } from "react-icons/bs";
import { Product } from "../components/Product";
import ProductsList from "../data/productList.json";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useState } from "react";
import { FormatPricing } from "../helpers/FormatPricing";
import { replaceSpecialChars } from "../helpers/FunctionsHelpers";
import { sortList, sortListByDate } from "../helpers/sortList";
import moment from "moment";
type ProductProp = {
  id: number;
  name: string;
  dateInclusion: Date;
  description: string;
  pricing: number;
  image: string;
};

export function Products() {
  const [query, setQeury] = useState("");
  const productsWithDate: ProductProp[] = ProductsList.map((product) => ({
    ...product,
    dateInclusion: new Date(product.dateInclusion),
  }));
  const [listProduct, setListProduct] =
    useState<ProductProp[]>(productsWithDate);

  const handleOnsearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQeury(e.target.value);
    if (e.target.value === "") {
      setListProduct(productsWithDate);
    }
  };
  const handleSearch = () => {
    const ListFiltered = productsWithDate.filter(
      (p) =>
        replaceSpecialChars(p.name).toLowerCase().includes(query) ||
        FormatPricing(p.pricing).toString().toLowerCase().includes(query) ||
        moment(p.dateInclusion)
          .format("DD-MM-YYYY")
          .toString()
          .toLowerCase()
          .includes(query)
    );

    setListProduct(ListFiltered);
  };

  const handleSort = (order: "asc" | "desc", sortBy: string) => {
    if (sortBy === "Date") {
      const sortedList: ProductProp[] = sortListByDate(listProduct, order);
      setListProduct(sortedList);
    } else {
      const sortedList: ProductProp[] = sortList(listProduct, order);
      setListProduct(sortedList);
    }
  };

  return (
    <>
      <Row
        md={2}
        xs={1}
        lg={3}
        className="d-flex align-items-baseline justify-content-sta"
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "0.3rem" }}
        >
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Busque pelo nome, preço ou data de inclusão"
              aria-label="Username"
              title="Busque pelo nome, preço ou data de inclusão"
              aria-describedby="basic-addon1"
              value={query as string}
              onChange={handleOnsearchChange}
            />
            <Button
              variant="outline-secondary"
              id="button-addon1"
              title="Buscar"
              onClick={handleSearch}
            >
              <BsSearch />
            </Button>
          </InputGroup>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "0.3rem" }}
        >
          <span> Ordenar por preço:</span>
          <Button
            variant="outline-secondary"
            title="Ordem decrescente"
            size="sm"
            onClick={() => handleSort("desc", "")}
          >
            <BsCaretDown />
          </Button>
          <div>
            <span className="fs-4" style={{ fontWeight: "bolder" }}>
              -
            </span>
          </div>
          <Button
            variant="outline-secondary"
            title="Ordem Crescente"
            size="sm"
            onClick={() => handleSort("asc", "")}
          >
            <BsCaretUp />
          </Button>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: "0.3rem" }}
        >
          <span> Ordenar por Data:</span>
          <Button
            variant="outline-secondary"
            title="Ordem decrescente"
            size="sm"
            onClick={() => handleSort("desc", "Date")}
          >
            <BsCaretDown />
          </Button>
          <div>
            <span className="fs-4" style={{ fontWeight: "bolder" }}>
              -
            </span>
          </div>
          <Button
            variant="outline-secondary"
            title="Ordem Crescente"
            size="sm"
            onClick={() => handleSort("asc", "Date")}
          >
            <BsCaretUp />
          </Button>
        </div>
      </Row>
      <Row md={2} xs={1} lg={3} className="g-3">
        {listProduct.map((item) => (
          <Col key={item.id}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
