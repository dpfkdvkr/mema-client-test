'use client';
import TabBar from '@/components/TabBar';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import React from 'react';
import LoginForm from '@/components/LoginForm';
import { useInputState } from '@/hooks/useInputState';
import Button from '@/components/Button';
import Logo from '/public/svgs/common/logo.svg';
import TitleWithDescription from '@/components/common/TitleWithDescription';

const LoginPage = () => {
  const router = useRouter();
  const emailInputState = useInputState();
  const passwordInputState = useInputState();

  return (
    <>
      <TabBar onClickBack={() => router.push('/')} />
      <TitleWithDescription
        title={
          <>
            <Logo fill="#238AFF" />
            에서 친구들과
            <br /> 더 쉬운 모임을 하고 싶다면?
          </>
        }
        description="회원 서비스 이용을 위해 로그인 해주세요!"
      />
      <LoginForm email={emailInputState} password={passwordInputState} />
      <StyledButton
        name="로그인하기"
        disabled={!(emailInputState.value && passwordInputState.value)}
        onClick={() => {
          console.log('로그인 요청 API 호출');
        }}
      />
    </>
  );
};

export default LoginPage;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 34px;
  width: calc(100% - 32px);
`;
