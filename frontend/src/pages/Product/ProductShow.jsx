import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Review from "../Review/Review";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-REQUEST":
      return { ...state, loading: true };

    case "FETCH-SUCCESS":
      return { ...state, loading: false, product: action.payload };

    default:
      return state;
  }
};

const ProductShow = () => {
  const params = useParams();
  console.log(params);
  let navigate = useNavigate();
  const [{ loading, product }, dispatch] = useReducer(reducer, { loading: false, product: [] });

  useEffect(() => {
    const ProductsLoad = async () => {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        let { data } = await axios.get("http://localhost:8000/product");
        dispatch({ type: "FETCH-SUCCESS", payload: data });
      } catch (err) {}
    };
    ProductsLoad();
  }, []);

  return loading ? (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Spinner animation="border" />
    </div>
  ) : (
    <Container>
      <Row>
        {product.map((item) => (
          <Col className="mt-5" style={{ cursor: "pointer" }} lg={3}>
            <Link style={{ textDecoration: "none", color: "black" }} to={`/products/${item.slug}`}>
              <Card className="cardItem">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Card.Title>{item.name}</Card.Title>
                    <p>{item.BrandName}</p>
                  </div>
                  <h3 style={{ margin: "0px" }}> $ {item.price} </h3> <br />
                  <Review rating={item.rating} review={item.NumberOfReview} /> <br />
                  <Card.Text>{item.discription}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductShow