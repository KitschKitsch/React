import React from "react";
import styled from "styled-components"; // 스타일링 라이브러리

const Wrapper = styled.div` // 컴포넌트로 내려줌
  padding: 1em;
  background: grey;`;

const Title = styled.h1` // 스타일링된 컴포넌트 형식
  font-size: 1.5em;
  color: white;
  text-align: center;`;

export default function MainPage(props) {
    return (
            <Wrapper>
                <Title>
                    안녕 리액트! styled-components 사용하기
                </Title>
            </Wrapper>
    )
}