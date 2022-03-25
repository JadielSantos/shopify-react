import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Shop } from '../context/Shop'
import { Image, Button } from 'react-bootstrap'

export const Product = () => {
  let { id } = useParams();
  const { fetchProductById, addItemToCheckout, product, openCart } = useContext(Shop);

  useEffect(() => {
    fetchProductById(id);
    return () => {
    };
  }, [fetchProductById, id]);

  if(!product) return <h1>Loading</h1>

  return (
    <>
      <h1>{product.title}</h1>
      {/* <Image src={product.images[0].src} width='400px'></Image> */}
      {/* <h3>${product.variants[0].price}</h3> */}
      <Button onClick={() => {
        addItemToCheckout(product.variants[0].id, 1)
        openCart()
      }}>Add to Cart</Button>
    </>
  )
}

export default Product;