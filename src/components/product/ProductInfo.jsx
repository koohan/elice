import React from 'react';
import Image from './Image';
import Text from './Text';
import { Card, TextContainer, LineContainer } from './styles/LayoutStyles';
import { Line } from '../../GlobalStyles/LayoutStyles';

const ProductInfo = ({ imageSrc, name, description, price, isLoading }) => (
    <>
    <Card>
    <Image src={imageSrc} alt={name} isLoading={isLoading} />
    </Card>
    <LineContainer>
      <Line />
    </LineContainer>
    <TextContainer>
    <Text type="h2" isLoading={isLoading}>{name}</Text>
    <Text isLoading={isLoading}>{description}</Text>
    <Text isLoading={isLoading}>{`${price} 원`}</Text>
  </TextContainer>
  </>
);

export default ProductInfo;
