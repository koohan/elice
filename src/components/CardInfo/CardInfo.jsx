import React, { useState } from "react";
import {
  PaymentFormContainer,
  Form,
  Label,
  Input,
  Select,
  ExpiryContainer,
  Button,
} from "./styles/CardInfoStyles";
import CardDisplay from "./CardDisplay";

const initialCardInfo = {
  cardNumber: "",
  cardHolder: "",
  expiryMonth: "",
  expiryYear: "",
  cvc: "",
};

const CardInfo = () => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );

  const handleCardNumberChange = (e) => {
    const formattedNumber = e.target.value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardInfo((prevInfo) => ({ ...prevInfo, cardNumber: formattedNumber }));
  };

  const handleInputChange = (key, value) => {
    setCardInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <CardDisplay
        cardNumber={cardInfo.cardNumber}
        cardHolder={cardInfo.cardHolder}
        expiryMonth={cardInfo.expiryMonth}
        expiryYear={cardInfo.expiryYear}
      />
      <PaymentFormContainer>
        <Form>
          <Label>카드 번호</Label>
          <Input
            type="text"
            placeholder="카드 번호"
            value={cardInfo.cardNumber}
            onChange={handleCardNumberChange}
          />

          <Label>카드 소유자</Label>
          <Input
            type="text"
            placeholder="카드 소유자"
            value={cardInfo.cardHolder}
            onChange={(e) => handleInputChange("cardHolder", e.target.value)}
          />

          <Label>만료 날짜</Label>
          <ExpiryContainer>
            <Select
              value={cardInfo.expiryMonth}
              onChange={(e) => handleInputChange("expiryMonth", e.target.value)}
            >
              <option value="" disabled>
                월
              </option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </Select>
            <Select
              value={cardInfo.expiryYear}
              onChange={(e) => handleInputChange("expiryYear", e.target.value)}
            >
              <option value="" disabled>
                년
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </ExpiryContainer>

          <Label>CVC</Label>
          <Input
            type="password"
            placeholder="CVC"
            value={cardInfo.cvc}
            onChange={(e) => handleInputChange("cvc", e.target.value)}
          />

          <Button type="submit">등록하기</Button>
        </Form>
      </PaymentFormContainer>
    </div>
  );
};

export default CardInfo;
