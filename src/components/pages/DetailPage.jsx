import React from 'react';
import ProductDetail from '../../components/detail/ProductDetail';

const productData = {
  productId: '201',
  name: '클래식 신발',
  shortDescription: '우아하고 고급스러운 디자인으로 어떤 옷차림에도 잘 어울리는 신발입니다.',
  longDescription: '최고의 가죽 소재를 사용하여 내구성이 뛰어나며, 안감은 부드러운 소재로 되어 있어 편안한 착화감을 선사합니다. 또한, 미끄럼 방지 기능이 있는 고무 아웃솔이 적용되어 있어 안전성도 높습니다.',
  category: '신발',
  brand: 'Brand A',
  price: 59900,
  colors: ['검은색', '브라운', '흰색'],
  images: ['https://via.placeholder.com/150'],
  variants: [
    {
      variantId: '2011',
      color: '검은색',
      size: 'M',
      price: 59900,
      stock: 50,
      images: ['https://via.placeholder.com/150'],
    },
    {
      variantId: '2012',
      color: '브라운',
      size: 'L',
      price: 59900,
      stock: 30,
      images: ['https://via.placeholder.com/150'],
    },
  ],
};

const relatedProductsData = [
  {
    productId: '202',
    name: '스포트 러닝화',
    description: '편안한 착화감의 스포트 러닝화',
    category: '신발',
    brand: 'Brand B',
    price: 69900,
    images: ['https://via.placeholder.com/150'],
    variants: [
      {
        variantId: '2021',
        color: '흰색',
        size: 'M',
        price: 69900,
        stock: 20,
        images: ['https://via.placeholder.com/150'],
      },
      {
        variantId: '2022',
        color: '검은색',
        size: 'L',
        price: 69900,
        stock: 15,
        images: ['https://via.placeholder.com/150'],
      },
    ],
  },
  {
    productId: '203',
    name: '캐쥬얼 스니커즈',
    description: '편안한 착화감의 캐쥬얼 스니커즈',
    category: '신발',
    brand: 'Brand C',
    price: 39900,
    images: ['https://via.placeholder.com/150'],
    variants: [
      {
        variantId: '2031',
        color: '흰색',
        size: 'M',
        price: 39900,
        stock: 20,
        images: ['https://via.placeholder.com/150'],
      },
      {
        variantId: '2032',
        color: '검은색',
        size: 'L',
        price: 39900,
        stock: 15,
        images: ['https://via.placeholder.com/150'],
      },
    ],
  },
  {
    productId: '204',
    name: '하이탑 부츠',
    description: '고급스러운 디자인의 하이탑 부츠',
    category: '신발',
    brand: 'Brand D',
    price: 79900,
    images: ['https://via.placeholder.com/150'],
    variants: [
      {
        variantId: '2041',
        color: '검은색',
        size: 'M',
        price: 79900,
        stock: 20,
        images: ['https://via.placeholder.com/150'],
      },
      {
        variantId: '2042',
        color: '브라운',
        size: 'L',
        price: 79900,
        stock: 15,
        images: ['https://via.placeholder.com/150'],
      },
    ],
  },
];

const DetailPage = () => {
  const relatedProducts = relatedProductsData.filter(
    (product) => product.category === productData.category
  );

  return (
    <ProductDetail
      product={productData}
      relatedProducts={relatedProducts}
    />
  );
};

export default DetailPage;
