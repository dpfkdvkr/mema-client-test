'use client';
import React from 'react';
import styled from 'styled-components';
import IntroButtons from '@/features/Intro/IntroButtons';
import WelcomeHeader from '@/features/Intro/WelcomeHeader';
import TabBar from '@/components/TabBar';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import MeetingHistoryNull from '@/features/home/main/MeetingHistoryNull';
import BottomNavigation from '../../components/BottomNavigation';
import { ChevronRight } from 'react-feather';
import MeetingHistoryGrid from '@/features/home/main/MeetingHistoryGrid';

export default function Home() {
  const isLoggedIn = true;
  const router = useRouter();
  return (
    <>
      {isLoggedIn ? (
        <div>
          <TabBar leftType="logo" />
          <Button
            buttonType="ghost"
            name="참여코드 입력하기"
            onClick={() => router.push('/meet/join')}
          />
          {/*<MeetingHistoryNull />*/}
          <RecentMeetingTitle>
            <p>최근 미팅 내역</p>
            <ChevronRight
              onClick={() => {
                router.push('/meet/management');
              }}
            />
          </RecentMeetingTitle>
          <MeetingHistoryGrid />
          <StyledButton name="미팅 만들기" onClick={() => router.push('/meet/create')} />
          <BottomNavigation />
        </div>
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
  position: absolute;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 106px;
  z-index: 50;
  width: calc(390px - 32px);
`;

const RecentMeetingTitle = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.title.md};
  margin: 38px 0 20px;

  svg {
    padding: 4px;
    cursor: pointer;
  }
`;
