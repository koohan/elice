import React from 'react';
import CombinedTemplate from '../../templates/combinedTemplate/CombinedTemplate';
import NavBar from '../../organisms/nav/NavBar';

const CartPage = () => {
  const items = [
    { id: 1, product: { name: '너무나 좋은 해변 수건', description: '흡수성이 뛰어난 면 수건', price: 19.99, image: 'path/to/image1.jpg' } },
    { id: 2, product: { name: '향긋한 애플 사이다 시럽', description: '맛있는 시럽으로 음료를 업그레이드하세요', price: 12.99, image: 'path/to/image2.jpg' } },
    { id: 3, product: { name: '가을 패션 모자', description: '스타일리시한 모자로 가을 옷차림을 완성하세요', price: 24.99, image: 'path/to/image3.jpg' } }
  ];

  const user = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmK71ObBifzt00f_UVxSxZrB8tB9YxnKjB7Q&s',
    name: '홍길동',
    email: 'honggildong@example.com',
    phone: '010-1234-5678'
  };

  return (
    <>
      <NavBar />
      <CombinedTemplate user={user} items={items} />
    </>
  );
};

export default CartPage;
