import React from 'react';
import Image from '../../atoms/products/Image';
import Text from '../../atoms/products/Text';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



const ProductInfo = ({ imageSrc, name, description, price, isLoading }) => (
    <>
    <Image src={imageSrc} alt={name} isLoading={isLoading} />
    <Text type="h2">{isLoading ? <Skeleton /> : name}</Text>
    <Text>{isLoading ? <Skeleton count={2} /> : description}</Text>
    <Text>{isLoading ? <Skeleton width={50} /> : price}</Text>
    </>
);

export default ProductInfo;
