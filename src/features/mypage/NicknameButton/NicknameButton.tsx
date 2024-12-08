'use client';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { ChevronRight } from 'react-feather';
import React from 'react';

const NicknameButton = () => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push('/mypage/edit')}>
      쌈뽕한 메마러버
      <ChevronRight />
    </Container>
  );
};

export default NicknameButton;

const Container = styled.div`
  ${({ theme }) => theme.fonts.title.lg};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;
