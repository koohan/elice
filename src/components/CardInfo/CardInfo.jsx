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

const CardInfo = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );

  const handleCardNumberChange = (e) => {
    const formattedNumber = e.target.value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedNumber);
  };

  return (
    <PaymentFormContainer>
      <CardDisplay
        cardNumber={cardNumber}
        cardHolder={cardHolder}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
      />
      <Form>
        <Label htmlFor="card-number">카드 번호</Label>
        <Input
          type="text"
          id="card-number"
          name="card-number"
          placeholder="카드 번호"
          value={cardNumber}
          onChange={handleCardNumberChange}
          required
        />

        <Label htmlFor="name">카드 소유자</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="카드 소유자"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          required
        />

        <Label htmlFor="expiry-month">만료 날짜</Label>
        <ExpiryContainer>
          <Select
            id="expiry-month"
            name="expiry-month"
            value={expiryMonth}
            onChange={(e) => setExpiryMonth(e.target.value)}
            required
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
            id="expiry-year"
            name="expiry-year"
            value={expiryYear}
            onChange={(e) => setExpiryYear(e.target.value)}
            required
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

        <Label htmlFor="cvc">CVC</Label>
        <Input
          type="text"
          id="cvc"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          required
        />

        <Button type="submit">등록하기</Button>
      </Form>
    </PaymentFormContainer>
  );
};

export default CardInfo;
