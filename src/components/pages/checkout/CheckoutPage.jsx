import React from 'react';
import CheckoutTemplate from '../../templates/checkout/CheckoutTemplate';

const sampleItems = [
  { name: '티셔츠', price: 19900, quantity: 1, color: '검정', size: 'M', imageUrl: 'https://bon-systems.com/m9_data/otherpage/business_design/imgs/20190717277114/01.jpg' },
  { name: '후디', price: 49900, quantity: 1, color: '네이비', size: 'L', imageUrl: 'https://bon-systems.com/m9_data/otherpage/business_design/imgs/20190717277114/01.jpg' }
];

const total = sampleItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

const CheckoutPage = () => {
  return (
    <div>
      <CheckoutTemplate items={sampleItems} total={total} />
    </div>
  );
}

export default CheckoutPage;