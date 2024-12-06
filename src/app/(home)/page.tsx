'use client';
import React from 'react';
import styled from 'styled-components';
import IntroButtons from '@/features/Intro/IntroButtons';
import WelcomeHeader from '@/features/Intro/WelcomeHeader';

export default function Home() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? (
        <div>로그인 시 메인 화면</div>
      ) : (
        <Container>
          <WelcomeHeader />
          <IntroButtons />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  text-align: center;
  display: absolute;
`;
