'use client';
import React, { useState } from 'react';
import TabBar from '@/components/TabBar';
import Button from '@/components/Button';
import MeetingJoinGuide from '@/features/meet/join/MeetingJoinGuide';
import JoinCodeInput from '@/features/meet/join/JoinCodeInput';
import { useInputState } from '@/hooks/useInputState';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import { Text } from '@/components/Modal/modalTypography';
import useToggle from '@/lib/hooks/useToggle';
import { useMutation } from '@tanstack/react-query';
import { joinMeet } from '@/lib/api/meets';
import { AxiosError } from 'axios';
import { ErrorResponse } from '@/types/ErrorResponse';

const JoinMeetingPage = () => {
  const router = useRouter();
  const joinCode = useInputState();
  const [isOpenInvalidCodeModal, toggleInvalidCodeModal] = useToggle();
  const [errorMessage, setErrorMessage] = useState('유효하지 않은 참여 코드에요!');

  const joinMeetMutation = useMutation({
    mutationFn: joinMeet,
    onSuccess: () => {
      router.push('/');
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      if (error.response?.data) {
        switch (error.response?.data.code) {
          case 'U002':
            setErrorMessage('이미 등록된 미팅이에요!');
            break;
          case 'ME002':
            setErrorMessage('유효하지 않은 참여 코드에요!');
            break;
          default:
            setErrorMessage('유효하지 않은 참여 코드에요!');
        }
      }
      toggleInvalidCodeModal();
    },
  });

  const handleJoinMeet = () => {
    if (!joinCode.value) {
      toggleInvalidCodeModal();
      return;
    }
    joinMeetMutation.mutate({ joinCode: joinCode.value });
  };

  return (
    <>
      <TabBar />
      <MeetingJoinGuide />
      <JoinCodeInput joinCode={joinCode} />
      <StyledButton name="입력 완료" disabled={!joinCode.value} onClick={handleJoinMeet} />
      {isOpenInvalidCodeModal && (
        <Modal type="Ok" onOk={toggleInvalidCodeModal} width={326}>
          <Text>{errorMessage}</Text>
        </Modal>
      )}
    </>
  );
};

export default JoinMeetingPage;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 34px;
  width: calc(100% - 32px);
`;
