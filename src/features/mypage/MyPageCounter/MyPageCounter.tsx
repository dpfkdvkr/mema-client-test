'use client';
import styled from 'styled-components';
import React from 'react';

const MyPageCounter = () => {
  return (
    <Container>
      <CounterItem>
        <p className="countText">12</p>
        <p className="title">미팅 수</p>
      </CounterItem>
      <CounterItem>
        <p className="countText">36</p>
        <p className="title">메마 방문 수</p>
      </CounterItem>
      <CounterItem>
        <p className="countText">2</p>
        <p className="title">내 뱃지 수</p>
      </CounterItem>
    </Container>
  );
};

export default MyPageCounter;

const Container = styled.div`
  display: flex;
  width: calc(100% - 32px);
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.gray[6]};
`;

const CounterItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex: 1;
  .countText {
    ${({ theme }) => theme.fonts.title.lg};
    color: ${({ theme }) => theme.colors.primary.default};
  }
  .title {
    ${({ theme }) => theme.fonts.text.lg};
    color: ${({ theme }) => theme.colors.gray[3]};
  }
`;
