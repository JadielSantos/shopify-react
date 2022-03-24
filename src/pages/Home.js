import React, { useContext, useEffect } from 'react'
import { Shop } from '../context/Shop'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Home = () => {
  const { fetchProducts, products } = useContext(Shop);

  useEffect(() => {
    fetchProducts()
    return () => {
      
    };
  }, [fetchProducts]);

  if(!products) return <h1>Loading</h1>

  return (
    <Row className="justify-content-md-left">
      {products.map(product => (
        <Col key={product.id} md={4}>
          <Link to={`/product/${product.id}`}>
            <Image src={`${product.images[0].src}`} rounded width='300px'></Image>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>{product.variants[0].price}</h3>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

export default Home