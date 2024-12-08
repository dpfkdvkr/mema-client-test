'use client';
import React from 'react';
import styled from 'styled-components';
import MyPageProfileIcon from '@/features/mypage/MyPageProfileIcon/MyPageProfileIcon';
import TabBar from '@/components/TabBar';
import { useInputState } from '@/hooks/useInputState';
import MyPageNicknameInput from '@/features/mypage/MyPageNicknameInput';
import OwnedBadgeGrid from '@/features/mypage/OwnedBadgeGrid';
import ColorPalette from '@/features/mypage/ColorPalette';

const EditMyPage = () => {
  const nickname = useInputState();

  return (
    <>
      <TabBar />
      <Container>
        <MyPageProfileIcon />
        <MyPageNicknameInput nickname={nickname} />
        <OwnedBadgeGrid />
        <ColorPalette />
      </Container>
    </>
  );
};
export default EditMyPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
