import React from "react";
import { CardContainer, Card } from "./styles/BoardLayout";
import { Label } from "../checkout/styles";
import { CommonTitle } from "./styles/FontStyles";

const PriceData = ({ priceData }) => {
  return (
    <>
      <CardContainer>
        <Card>
          <div
            style={{ padding: "10px", margin: "-16px", marginBottom: "2.5rem" }}
          >
            <Label>총 매출</Label>
          </div>
          <CommonTitle>{priceData.totalSales.toLocaleString()} 원</CommonTitle>
        </Card>
        <Card>
          <div
            style={{ padding: "10px", margin: "-16px", marginBottom: "2.5rem" }}
          >
            <Label>총 제품 수</Label>
          </div>
          <CommonTitle>
            {priceData.totalProducts.toLocaleString()} 개
          </CommonTitle>
        </Card>
      </CardContainer>
      <CardContainer>
        <Card>
          <div
            style={{ padding: "10px", margin: "-16px", marginBottom: "2.5rem" }}
          >
            <Label>총 브랜드 수</Label>
          </div>
          <CommonTitle>{priceData.totalBrands.toLocaleString()} 개</CommonTitle>
        </Card>
        <Card>
          <div
            style={{ padding: "10px", margin: "-16px", marginBottom: "2.5rem" }}
          >
            <Label>총 재고</Label>
          </div>
          <CommonTitle>{priceData.totalStock.toLocaleString()} 개</CommonTitle>
        </Card>
      </CardContainer>
    </>
  );
};

export default PriceData;
