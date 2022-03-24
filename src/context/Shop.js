import React, { Component } from 'react';
import Client from 'shopify-buy';

const Shop = React.createContext();

const client = Client.buildClient({
  domain: 'jadiel-react.myshopify.com',
  storefrontAccessToken: 'ab9b0578b402e140a00dc39a501910b2',
});

class ShopProvider extends Component {

  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: 'test'
  }

  componentDidMount() {
    this.createCheckout();
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    this.setState({checkout: checkout})
  }

  additemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [{
      variantId,
      quantity: parseInt(quantity, 10)
    }]

    const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
    this.setState({checkout: checkout})
  }

  fetchProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({products: products});
  }

  fetchProductById = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({product: product});
  }

  closeCart = () => {
    this.setState({isCartOpen: false});
  }

  openCart = () => {
    this.setState({isCartOpen: true});
  }

  render() {
    return(
      <Shop.Provider value={{ 
          ...this.state,
          fetchProducts: this.fetchProducts,
          fetchProductById: this.fetchProductById,
          closeCart: this.closeCart,
          openCart: this.openCart,
          additemToCheckout: this.additemToCheckout
         }}>
        {this.props.children}
      </Shop.Provider>
    )
  }
}

const ShopConsumer = Shop.Consumer

export { ShopConsumer, Shop }

export default ShopProvider;