'use client';
import React from 'react';
import TabBar from '@/components/TabBar';
import Button from '@/components/Button';
import MeetingJoinGuide from '@/features/meet/join/MeetingJoinGuide';
import JoinCodeInput from '@/features/meet/join/JoinCodeInput';
import { useInputState } from '@/hooks/useInputState';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const JoinMeetingPage = () => {
  const router = useRouter();
  const joinCode = useInputState();
  return (
    <>
      <TabBar />
      <MeetingJoinGuide />
      <JoinCodeInput joinCode={joinCode} />
      <StyledButton name="입력 완료" disabled={!joinCode.value} onClick={() => router.push('/')} />
    </>
  );
};

export default JoinMeetingPage;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 34px;
  width: calc(100% - 32px);
`;
