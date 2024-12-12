import React from 'react';
import styled from 'styled-components';
import MemberIconStack from '@/features/home/main/MemberIconStack';
import { useRouter } from 'next/navigation';

const meetings = [
  {
    id: 7,
    title: '쩝쩝이들',
    isActive: true,
    members: [
      {
        meetMemberId: 1,
        userInfo: {
          userId: 101,
          nickname: '박쌈뽕',
          puzzleId: 1,
          puzzleColor: 'blue',
          isMe: true,
        },
      },
      {
        meetMemberId: 2,
        userInfo: {
          userId: 102,
          nickname: '빨강이',
          puzzleId: 2,
          puzzleColor: 'red',
        },
      },
      {
        meetMemberId: 3,
        userInfo: {
          userId: 103,
          nickname: '노랑이',
          puzzleId: 3,
          puzzleColor: 'yellow',
        },
      },
    ],
  },
  {
    id: 9,
    title: '15학번이즈백',
    isActive: false,
    members: [
      {
        meetMemberId: 4,
        userInfo: {
          userId: 104,
          nickname: '초록이',
          puzzleId: 4,
          puzzleColor: 'green',
        },
      },
      {
        meetMemberId: 5,
        userInfo: {
          userId: 105,
          nickname: '보라',
          puzzleId: 5,
          puzzleColor: 'purple',
        },
      },
      {
        meetMemberId: 6,
        userInfo: {
          userId: 106,
          nickname: '검정',
          puzzleId: 6,
          puzzleColor: 'black',
        },
      },
    ],
  },
  {
    id: 4,
    title: '한강 치킨팟',
    isActive: false,
    members: [
      {
        meetMemberId: 7,
        userInfo: {
          userId: 107,
          nickname: '초록초록',
          puzzleId: 4,
          puzzleColor: 'green',
        },
      },
      {
        meetMemberId: 8,
        userInfo: {
          userId: 108,
          nickname: '보라보라',
          puzzleId: 5,
          puzzleColor: 'purple',
        },
      },
      {
        meetMemberId: 9,
        userInfo: {
          userId: 109,
          nickname: '검정검정',
          puzzleId: 6,
          puzzleColor: 'black',
        },
      },
      {
        meetMemberId: 10,
        userInfo: {
          userId: 110,
          nickname: '파란파랑',
          puzzleId: 7,
          puzzleColor: 'blue',
        },
      },
      {
        meetMemberId: 11,
        userInfo: {
          userId: 111,
          nickname: '빨강빨강',
          puzzleId: 8,
          puzzleColor: 'red',
        },
      },
      {
        meetMemberId: 12,
        userInfo: {
          userId: 112,
          nickname: '노랑노랑',
          puzzleId: 9,
          puzzleColor: 'yellow',
        },
      },
      {
        meetMemberId: 13,
        userInfo: {
          userId: 113,
          nickname: '초록연두',
          puzzleId: 10,
          puzzleColor: 'green',
        },
      },
      {
        meetMemberId: 14,
        userInfo: {
          userId: 114,
          nickname: '보라어스',
          puzzleId: 11,
          puzzleColor: 'purple',
        },
      },
    ],
  },
];

const MeetingHistoryGrid = () => {
  const router = useRouter();
  return (
    <Container>
      <p className="title">곧 만나요!</p>
      <BlockContainer>
        {meetings
          .filter((meeting) => meeting.isActive)
          .slice(0, 4)
          .map((meeting) => (
            <MeetingBlock
              key={meeting.id}
              $isActive={meeting.isActive}
              onClick={() => {
                router.push(`/meet/${meeting.id}`);
              }}
            >
              <p className="title">{meeting.title}</p>
              <Row>
                <p className="description">인원 {meeting.members.length}명</p>
                <MemberIconStack members={meeting.members} />
              </Row>
            </MeetingBlock>
          ))}
      </BlockContainer>
      <p className="title">즐거웠어요!</p>
      <BlockContainer>
        {meetings
          .filter((meeting) => !meeting.isActive)
          .slice(0, 4)
          .map((meeting) => (
            <MeetingBlock
              key={meeting.id}
              $isActive={meeting.isActive}
              onClick={() => {
                router.push(`/meet/${meeting.id}`);
              }}
            >
              <p className="title">{meeting.title}</p>
              <Row>
                <p className="description">인원 {meeting.members.length}명</p>
                <MemberIconStack members={meeting.members} />
              </Row>
            </MeetingBlock>
          ))}
      </BlockContainer>
    </Container>
  );
};

export default MeetingHistoryGrid;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  .title {
    ${({ theme }) => theme.fonts.title.sm};
    color: ${({ theme }) => theme.colors.gray[3]};
    margin-bottom: 10px;
  }
`;

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 40px;
`;

const MeetingBlock = styled.div<{ $isActive: boolean }>`
  border-radius: 15px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary.lighter : theme.colors.gray[6]};
  padding: 16px;
  cursor: pointer;
  .title {
    ${({ theme }) => theme.fonts.title.xs};
    color: black;
  }
  .description {
    ${({ theme }) => theme.fonts.text.lg};
    color: ${({ theme, $isActive }) => ($isActive ? 'white' : theme.colors.gray[4])};
    margin-right: 10px;
    align-content: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-content: center;
`;
