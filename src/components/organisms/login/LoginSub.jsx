import React from "react";
import styled from "styled-components";
import { FindPWBtn, RegisterBtn } from "../../molecules/login/SubBtn";

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
`;

const Dot = styled.p`
    color: #E2DCF7;
    font-size: 11px;
    padding: 4px 8px 0 8px;
`;

const SubBtn = () => {
    return (
        <SubContainer>
            <FindPWBtn onClick={() => console.log("비밀번호 찾기")} />
            <Dot> • </Dot>
            <RegisterBtn onClick={() => console.log("회원가입")} />
        </SubContainer>
    );
};

export default SubBtn;
