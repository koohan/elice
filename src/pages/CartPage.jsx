import React, { useEffect, useState } from 'react';
import CombinedTemplate from '../components/cart/CombinedTemplate';
import Sidebar from '../components/sidebar/Sidebar';
import NavBar from "../components/nav/nav";
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';

const CartPage = () => {
  const user = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    name: '홍길동',
    email: 'honggildong@example.com',
    phone: '010-1234-5678'
  };

  const [cartItems, setCartItems] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    fetch('/api/product')
      .then(response => response.json())
      .then(data => {
        setRelatedProducts(data);
      })
      .catch(error => {
        console.error('Error fetching related products:', error);
      });
  }, []);

  const cartItemsWithDetails = cartItems.map((cartItem, index) => {
    const product = relatedProducts.find(p => p._id === cartItem.productId);
    if (!product) {
      return null;
    }
  
    const totalQuantity = Object.values(cartItem.sizes).reduce((acc, sizeQty) => acc + sizeQty, 0);
    return {
      id: `${cartItem.productId}-${index}`,
      product: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.images?.[0] || '이미지 URL',
      },
      selectedColor: cartItem.color,
      selectedSize: cartItem.sizes,
      quantity: totalQuantity
    };
  }).filter(item => item !== null);  

  const totalAmount = cartItemsWithDetails.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0).toLocaleString('ko-KR');

  return (
    <>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar user={user} />
        </SidebarLayout>
        <ContentLayout>
          <CombinedTemplate items={cartItemsWithDetails} totalAmount={totalAmount} />
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default CartPage;
