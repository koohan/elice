import React, { useState } from "react";
import { Container, ButtonContainer, ItemContainer, StyledButton } from './styled/mainItem';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';
import Item5 from './Item5';

const ItemList = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const renderSelectedItem = () => {
        switch (selectedItem) {
            case 1:
                return <Item1 />;
            case 2:
                return <Item2 />;
            case 3:
                return <Item3 />;
            case 4:
                return <Item4 />;
            case 5:
                return <Item5 />;
            default:
                return <Item1 />;
        }
    };

    return (
        <>
            <Container>
                <ButtonContainer>
                    <StyledButton onClick={() => setSelectedItem(1)}>버튼 1</StyledButton>
                    <StyledButton onClick={() => setSelectedItem(2)}>버튼 2</StyledButton>
                    <StyledButton onClick={() => setSelectedItem(3)}>버튼 3</StyledButton>
                    <StyledButton onClick={() => setSelectedItem(4)}>버튼 4</StyledButton>
                    <StyledButton onClick={() => setSelectedItem(5)}>버튼 5</StyledButton>
                </ButtonContainer>
                <ItemContainer>
                    {renderSelectedItem()}
                </ItemContainer>
            </Container>
        </>
    )
}

export default ItemList;
