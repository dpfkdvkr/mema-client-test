'use client';
import Logo from '/public/svgs/common/logo.svg';
import React, { useState } from 'react';
import { useInputState } from '@/hooks/useInputState';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';
import useToggle from '@/lib/hooks/useToggle';
import AccountInputs from '@/features/account/signup/AccountInputs';
import NicknameInput from '@/features/account/signup/NicknameInput';
import TabBar from '@/components/TabBar';
import { Text } from '@/components/Modal/modalTypography';
import TitleWithDescription from '@/components/common/TitleWithDescription';

const SignupPage = () => {
  const router = useRouter();
  const nickname = useInputState();
  const email = useInputState();
  const password = useInputState();
  const verificationCode = useInputState();

  const [currentStep, setCurrentStep] = useState(0);
  const [isOpenModal, toggleOpenModal] = useToggle();

  const next = () => {
    setCurrentStep((prev) => ++prev);
  };

  const steps = [
    {
      id: 1,
      content: (
        <AccountInputs
          onClickNext={next}
          email={email}
          verificationCode={verificationCode}
          password={password}
        />
      ),
      description: '서비스를 이용하실 이메일과 비밀번호를 알려주세요!',
    },
    {
      id: 2,
      content: <NicknameInput nickname={nickname} onClickNext={toggleOpenModal} />,
      description: '메마에서 사용하실 닉네임을 알려주세요!',
    },
  ];
  return (
    <>
      <TabBar />
      <TitleWithDescription
        title={
          <>
            어서오세요!
            <br />
            <Logo fill="#238AFF" /> 가 처음이신가요?
          </>
        }
        description={steps[currentStep].description}
      />
      {steps[currentStep].content}
      {isOpenModal && (
        <Modal
          type="Ok"
          okButtonName="로그인하기"
          onOk={() => {
            router.push('/login');
          }}
          width={326}
        >
          <Text>메마에 온 것을 환영합니다!</Text>
        </Modal>
      )}
    </>
  );
};

export default SignupPage;
