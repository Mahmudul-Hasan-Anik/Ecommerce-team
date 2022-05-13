import React, { useContext } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Store } from "../../Store";

const Cart = () => {
  const { state, dispatch } = useContext(Store);
  console.log(state);
  let updateCart = (item, quantity) => {
    dispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
  };
  let handleDelete = (item) => {
    dispatch({ type: "REMOVE-TO-CART", payload: { ...item } });
  };
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col lg={8}>
            <ListGroup className="w-100" horizontal>
              <ListGroup.Item variant="primary" className="w-100">
                Name
              </ListGroup.Item>
              <ListGroup.Item variant="primary" className="w-100">
                Image
              </ListGroup.Item>
              <ListGroup.Item variant="primary" className="w-100">
                Price
              </ListGroup.Item>
              <ListGroup.Item variant="primary" className="w-100">
                horizontally!
              </ListGroup.Item>
              <ListGroup.Item variant="primary" className="w-100">
                Delele
              </ListGroup.Item>
            </ListGroup>
            {state.cart.cartItem.map((item) => (
              <ListGroup className="w-100" horizontal>
                <ListGroup.Item className="w-100">{item.name}</ListGroup.Item>
                <ListGroup.Item className="w-100">
                  <img className="w-25" src={item.image} alt="" />
                </ListGroup.Item>
                <ListGroup.Item className="w-100">
                  {" "}
                  <b>$ {item.price}</b>{" "}
                </ListGroup.Item>
                <ListGroup.Item className="w-100">
                  <div>
                    {" "}
                    <Button
                      onClick={() => updateCart(item, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>{" "}
                    <b>{item.quantity}</b>{" "}
                    <Button
                      onClick={() => updateCart(item, item.quantity + 1)}
                      disabled={item.quantity === item.stock}
                    >
                      +
                    </Button>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="w-100">
                  {" "}
                  <Button onClick={() => handleDelete(item)} variant="danger">
                    Delele
                  </Button>{" "}
                </ListGroup.Item>
              </ListGroup>
            ))}
          </Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart