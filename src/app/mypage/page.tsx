'use client';
import TabBar from '@/components/TabBar';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import React from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import MyPageCounter from '@/features/mypage/MyPageCounter';
import MyPageProfileIcon from '@/features/mypage/MyPageProfileIcon/MyPageProfileIcon';
import NicknameButton from '@/features/mypage/NicknameButton/NicknameButton';

const MyPage = () => {
  const router = useRouter();
  return (
    <>
      <TabBar
        leftType="logo"
        rightType="settingBtn"
        onClick={() => router.push('/mypage/setting')}
      />
      <Container>
        <MyPageProfileIcon />
        <NicknameButton />
        <MyPageCounter />
      </Container>
      <BottomNavigation tab="mypage" />
    </>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
