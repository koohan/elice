import React from "react";
import { CardContainer, Card } from "./styles/BoardLayout";
import { Label } from "../checkout/styles";
import { CommonTitle } from "./styles/FontStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBoxOpen, faIndustry, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const PriceData = ({ priceData }) => {
  return (
    <>
      <CardContainer>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '-16px', marginBottom: '2.5rem' }}>
            <FontAwesomeIcon icon={faDollarSign} style={{ margin: '8px', color: '#aaa' }} />
            <Label>총 매출</Label>
          </div>
          <CommonTitle>{priceData.totalSales.toLocaleString('ko-KR')} 원</CommonTitle>
        </Card>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '-16px', marginBottom: '2.5rem' }}>
            <FontAwesomeIcon icon={faBoxOpen} style={{ margin: '8px', color: '#aaa' }} />
            <Label>총 제품 수</Label>
          </div>
          <CommonTitle>{priceData.totalProducts.toLocaleString('ko-KR')} 개</CommonTitle>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '-16px', marginBottom: '2.5rem' }}>
            <FontAwesomeIcon icon={faIndustry} style={{ margin: '8px', color: '#aaa' }} />
            <Label>총 브랜드 수</Label>
          </div>
          <CommonTitle>{priceData.totalBrands.toLocaleString('ko-KR')} 개</CommonTitle>
        </Card>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '-16px', marginBottom: '2.5rem' }}>
            <FontAwesomeIcon icon={faWarehouse} style={{ margin: '8px', color: '#aaa' }} />
            <Label>총 가치</Label>
          </div>
          <CommonTitle>{priceData.totalStock.toLocaleString('ko-KR')} 원</CommonTitle>
        </Card>
      </CardContainer>
    </>
  );
};

export default PriceData; 
