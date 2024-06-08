import React from 'react';
import CombinedTemplate from '../components/cart/CombinedTemplate';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import useFetchData from '../hook/useFetchData';

const CartPage = () => {
  const user = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    name: '홍길동',
    email: 'honggildong@example.com',
    phone: '010-1234-5678'
  };

  const { data, loading, error } = useFetchData('/data.json');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const items = [].concat(...data.product.map(({ variants }) => 
    variants.map(({ variantId, name, shortdescription, price, stock, images }) => ({
      id: variantId,
      product: {
        name,
        description: shortdescription,
        price,
        image: images[0]  
      },
      stock: stock  
    }))
  ));

  const totalAmount = items.reduce((acc, { product: { price }, stock }) => {
    return acc + price * stock;
  }, 0);

  return (
    <PageLayout>
      <SidebarLayout>
        <Sidebar user={user} />
      </SidebarLayout>
      <ContentLayout>
        <CombinedTemplate items={items} totalAmount={totalAmount} />
      </ContentLayout>
    </PageLayout>
  );
};

export default CartPage;
