'use client';
import React, { useState } from 'react';
import { useInputState } from '@/hooks/useInputState';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';
import useToggle from '@/lib/hooks/useToggle';
import TabBar from '@/components/TabBar';
import PwFindInputs from '@/features/account/findpw/PwFindInputs';
import PasswordInput from '@/features/account/findpw/PasswordInput';
import { Text } from '@/components/Modal/modalTypography';
import TitleWithDescription from '@/components/common/TitleWithDescription';

const FindPwPage = () => {
  const router = useRouter();
  const email = useInputState();
  const password = useInputState();
  const verificationCode = useInputState();

  const [currentStep, setCurrentStep] = useState(0);
  const [isOpenModal, toggleOpenModal] = useToggle();

  const prev = () => {
    setCurrentStep((prev) => --prev);
  };
  const next = () => {
    setCurrentStep((prev) => ++prev);
  };

  const steps = [
    {
      id: 1,
      content: (
        <PwFindInputs onClickNext={next} email={email} verificationCode={verificationCode} />
      ),
      description: '비밀번호 재설정을 위해 이메일 인증을 해야해요',
    },
    {
      id: 2,
      content: <PasswordInput password={password} onClickNext={toggleOpenModal} />,
      description: '새로운 비밀번호를 입력해주세요',
    },
  ];
  return (
    <>
      <TabBar />
      <TitleWithDescription
        title="비밀번호를 잊으셨나요?"
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

export default FindPwPage;
