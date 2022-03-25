import React, { useContext } from 'react'
import { Shop } from '../../context/Shop'
import { Offcanvas, Row, Col, Image, Button } from 'react-bootstrap';

export const Cart = () => {

  const { checkout, isCartOpen, closeCart, updateItemInCheckout } = useContext(Shop);

  return (
      <>
        <Offcanvas show={isCartOpen} onHide={closeCart} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
              {checkout.lineItems && checkout.lineItems.map(lineItem => (
                <Row key={lineItem.id}>
                  <Col>
                    <Image src={`${lineItem.variant.image.src}`} rounded width='100px'></Image>
                  </Col>
                  <Col>
                    <h4>{lineItem.title}</h4>
                  </Col>
                  <Col>
                    <Button onClick={() => updateItemInCheckout(lineItem.id, lineItem.quantity - 1)}>-</Button>
                    <p>{lineItem.quantity}</p>
                    <Button onClick={() => updateItemInCheckout(lineItem.id, lineItem.quantity + 1)}>+</Button>
                  </Col>
                  <Col>
                    <h5>${lineItem.variant.price}</h5>
                  </Col>
                </Row>
              ))}
          </Offcanvas.Body>
          {/* <a href={checkout.webUrl} target='_blank' rel="noreferrer">Checkout</a> */}

          <Button onClick={() => window.open(checkout.webUrl, '_blank').focus()}>Checkout</Button>
        </Offcanvas>
      </>
  )
}

export default Cart;