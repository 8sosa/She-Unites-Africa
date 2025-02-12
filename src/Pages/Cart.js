import React, { useEffect, useState, useCallback } from 'react';
import './Cart.css';
import { ButtonGroup, Button, Col, Container, Row, Table } from 'react-bootstrap';
import merchImage from '../Images/merch.jpeg';

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to get the value of a specific cookie
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Retrieve sessionId from cookies
  const sessionId = getCookie('sessionId');
  if (sessionId) {
    console.log('Session ID:', sessionId);
  } else {
    console.log('Session ID not found');
  }

  const fetchCart = useCallback(async () => {
    if (!sessionId) return; // Ensure sessionId is available

    setLoading(true);
    try {
      const response = await fetch(`/cart/${sessionId}`);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        setCart(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch cart.');
    } finally {
      setLoading(false);
    }
  }, [sessionId]);

  useEffect(() => {
    if (sessionId) {
      fetchCart();
    }
  }, [sessionId, fetchCart]);

  const updateCartItem = async (productId, quantityChange) => {
    try {
      const response = await fetch('/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          productId,
          quantity: quantityChange,
        }),
      });

      if (response.ok) {
        fetchCart(); // Refresh cart data
      } else {
        setError('Failed to update cart item.');
      }
    } catch (err) {
      setError('Failed to update cart item.');
    }
  };

  const removeCartItem = async (productId) => {
    try {
      const response = await fetch('/cart/remove', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          productId,
        }),
      });

      if (response.ok) {
        fetchCart(); // Refresh cart data
      } else {
        setError('Failed to remove cart item.');
      }
    } catch (err) {
      setError('Failed to remove cart item.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <Container className="full">
      <h1 className="mont">Your Cart</h1>
      {cart && cart.items.length > 0 ? (
        <>
          <Table striped hover bordered className="custom-table">
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.productId._id}>
                  <td>
                    <img
                      src={merchImage} // Replace with actual product image URL if available
                      alt={item.productId.productName}
                      className="cartItemImg"
                    />
                  </td>
                  <td className="cartItemDeets">
                    <p className="cartItemName mont">{item.productId.productName}</p>
                    <ButtonGroup className="quantity">
                      <Button
                        className="button"
                        variant="secondary"
                        onClick={() => updateCartItem(item.productId._id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <Button className="button" variant="secondary">
                        {item.quantity}
                      </Button>
                      <Button
                        className="button"
                        variant="secondary"
                        onClick={() => updateCartItem(item.productId._id, 1)}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                    <Row className="d-flex flex-row jcsb">
                      <Col>
                        <p className="cartItemText mont">PRICE</p>
                        <p className="cartItemText mont">£{item.productId.price.toFixed(2)}</p>
                      </Col>
                      <Col>
                        <p className="cartItemText mont">TOTAL</p>
                        <p className="cartItemText mont">£{(item.productId.price * item.quantity).toFixed(2)}</p>
                      </Col>
                    </Row>
                    <Button
                      variant="danger"
                      className="mt-2"
                      onClick={() => removeCartItem(item.productId._id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="checkoutDiv">
            <Row>
              <Col>
                <p className="mont tal">Order Price</p>
              </Col>
              <Col>
                <p className="mont tar">£{cart.total.toFixed(2)}</p>
              </Col>
            </Row>
            <Row className="checkoutDivTotal">
              <Col>
                <p className="mont tal">TOTAL</p>
              </Col>
              <Col>
                <p className="mont tar">£{(cart.total + 20).toFixed(2)}</p> {/* Assuming £20 shipping */}
              </Col>
            </Row>
            <button className="atcBtn mont">Checkout</button>
          </div>
        </>
      ) : (
        <p className="mont">Your cart is empty.</p>
      )}
    </Container>
  );
}
