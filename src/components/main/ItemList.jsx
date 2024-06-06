import React, { useState } from "react";
import { Container, ButtonContainer, ItemContainer, StyledButton } from './styled/mainItem';
import MainItem from './MainItem';

const ItemList = () => {
    const [selectedItem, setSelectedItem] = useState(1);

    return (
        <Container>
            <ButtonContainer>
                <StyledButton className={selectedItem === 1 ? 'selected' : ''} onClick={() => setSelectedItem(1)}>브랜드 1</StyledButton>
                <StyledButton className={selectedItem === 2 ? 'selected' : ''} onClick={() => setSelectedItem(2)}>브랜드 2</StyledButton>
                <StyledButton className={selectedItem === 3 ? 'selected' : ''} onClick={() => setSelectedItem(3)}>브랜드 3</StyledButton>
                <StyledButton className={selectedItem === 4 ? 'selected' : ''} onClick={() => setSelectedItem(4)}>브랜드 4</StyledButton>
                <StyledButton className={selectedItem === 5 ? 'selected' : ''} onClick={() => setSelectedItem(5)}>브랜드 5</StyledButton>
            </ButtonContainer>
            <ItemContainer>
                <MainItem itemKey={`item${selectedItem}`} />
            </ItemContainer>
        </Container>
    )
}

export default ItemList;
