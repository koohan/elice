import React from 'react';
import BrandSrc from '../../assets/adidas.webp';
import {
    Container,
    Brand,
    ProductContainer,
    Description,
    Products,
    Product,
    Pic,
    Name,
    Price
} from './styled/Item';

const itemData = {
    item1: [
        {
            id: 1,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 1-1',
            description: '제품 설명 1-1',
            price: '₩30,000',
        },
        {
            id: 2,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 1-2',
            description: '제품 설명 1-2',
            price: '₩50,000',
        },
        {
            id: 3,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 1-3',
            description: '제품 설명 1-3',
            price: '₩70,000',
        },
    ],
    item2: [
        {
            id: 1,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 2-1',
            description: '제품 설명 2-1',
            price: '₩30,000',
        },
        {
            id: 2,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 2-2',
            description: '제품 설명 2-2',
            price: '₩50,000',
        },
        {
            id: 3,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 2-3',
            description: '제품 설명 2-3',
            price: '₩70,000',
        },
    ],
    item3: [
        {
            id: 1,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 3-1',
            description: '제품 설명 3-1',
            price: '₩30,000',
        },
        {
            id: 2,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 3-2',
            description: '제품 설명 3-2',
            price: '₩50,000',
        },
        {
            id: 3,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 3-3',
            description: '제품 설명 3-3',
            price: '₩70,000',
        },
    ],
    item4: [
        {
            id: 1,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 4-1',
            description: '제품 설명 4-1',
            price: '₩30,000',
        },
        {
            id: 2,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 4-2',
            description: '제품 설명 4-2',
            price: '₩50,000',
        },
        {
            id: 3,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 4-3',
            description: '제품 설명 4-3',
            price: '₩70,000',
        },
    ],
    item5: [
        {
            id: 1,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 5-1',
            description: '제품 설명 5-1',
            price: '₩30,000',
        },
        {
            id: 2,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 5-2',
            description: '제품 설명 5-2',
            price: '₩50,000',
        },
        {
            id: 3,
            imageSrc: 'https://via.placeholder.com/150',
            name: '제품 5-3',
            description: '제품 설명 5-3',
            price: '₩70,000',
        },
    ],
}

const MainItem = ({ itemKey }) => {
    const products = itemData[itemKey] || [];

    return (
        <Container>
            <Brand>
                <img src={BrandSrc} alt="Brand" />
            </Brand>
            <ProductContainer>
                <Description>
                    <h2>브랜드명: NIKE</h2>
                    브랜드 설명: Just Do It
                </Description>
                <Products>
                    {products.map((product) => (
                        <Product key={product.id}>
                            <Pic style={{ backgroundImage: `url(${product.imageSrc})` }} />
                            <Name>{product.name}</Name>
                            <Price>{product.price}</Price>
                        </Product>
                    ))}
                </Products>
            </ProductContainer>
        </Container>
    );
};

export default MainItem;
