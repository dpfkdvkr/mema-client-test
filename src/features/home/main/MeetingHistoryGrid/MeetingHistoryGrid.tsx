import React from 'react';
import styled from 'styled-components';
import MemberIconStack from '@/features/home/main/MemberIconStack';
import { useRouter } from 'next/navigation';

// 랜덤 퍼즐 및 색상 생성 함수
const generateRandomMembers = (count: number) => {
  const colors = ['blue', 'red', 'yellow', 'green', 'purple', 'black'];
  return Array.from({ length: count }, () => ({
    puzzleId: Math.floor(Math.random() * 12) + 1,
    puzzleColor: colors[Math.floor(Math.random() * colors.length)],
  }));
};

// 미팅 데이터 랜덤하게 5개씩 생성하도록 잠시 짜놓음
const meetings = [
  ...Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `곧 만나요! 미팅 ${i + 1}`,
    isActive: true,
    members: generateRandomMembers(Math.floor(Math.random() * 8) + 3), // 3~10명
  })),
  ...Array.from({ length: 5 }, (_, i) => ({
    id: i + 6,
    title: `즐거웠어요! 미팅 ${i + 1}`,
    isActive: false,
    members: generateRandomMembers(Math.floor(Math.random() * 8) + 3), // 3~10명
  })),
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
