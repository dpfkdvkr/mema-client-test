'use client';
import styled from 'styled-components';
import React from 'react';
import MemberIcon from '@/components/common/MemberIcon';

const MyPageProfileIcon = () => {
  return (
    <Container>
      <MemberIcon puzzleId={1} puzzleColor="green" size={150} />
    </Container>
  );
};

export default MyPageProfileIcon;

const Container = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.gray[5]};
  flex-shrink: 0;
  margin: 20px 0;
`;
