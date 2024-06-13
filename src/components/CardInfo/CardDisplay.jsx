import React from "react";
import {
  CardImage,
  CardDetails,
  CardNumber,
  CardHolder,
  ExpirationDate,
} from "./styles/CardDisplayStyles";
import cardImage from "/assets/card.webp";

const formatCardNumber = (number) => {
  return number.replace(/(\d{4})/g, "$1 ").trim();
};

const CardDisplay = ({ cardNumber, cardHolder, expiryMonth, expiryYear }) => {
  return (
    <CardImage src={cardImage} alt="Credit Card">
      <CardDetails>
        <CardNumber>{formatCardNumber(cardNumber) || "#### #### #### ####"}</CardNumber>
        <CardHolder>{cardHolder || "FULL NAME"}</CardHolder>
        <ExpirationDate>{`${expiryMonth || "MM"}/${expiryYear || "YY"}`}</ExpirationDate>
      </CardDetails>
    </CardImage>
  );
};

export default CardDisplay;
