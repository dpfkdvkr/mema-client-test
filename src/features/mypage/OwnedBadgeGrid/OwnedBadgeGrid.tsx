import { ChevronRight } from 'react-feather';
import MemberIcon from '@/components/common/MemberIcon';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import GrayBoxContainer from '@/features/mypage/GrayBoxContainer';

const OwnedBadgeGrid = () => {
  const router = useRouter();
  return (
    <BadgeContainer>
      <ProfileBadgeTitle>
        <p className="title">프로필 뱃지</p>
        <ChevronRight
          onClick={() => {
            router.push('/mypage/badge');
          }}
        />
      </ProfileBadgeTitle>
      <BadgeIconGrid>
        <MemberIcon puzzleId={1} puzzleColor="blue" size={74} selected={true} />
        <MemberIcon puzzleId={2} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={3} puzzleColor="blue" size={74} disabled={true} />
        <MemberIcon puzzleId={4} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={5} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={6} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={7} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={8} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={9} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={10} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={11} puzzleColor="blue" size={74} />
        <MemberIcon puzzleId={12} puzzleColor="blue" size={74} />
      </BadgeIconGrid>
    </BadgeContainer>
  );
};
export default OwnedBadgeGrid;

const BadgeContainer = styled(GrayBoxContainer)`
  margin-bottom: 10px;
`;

const ProfileBadgeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    padding: 4px;
    cursor: pointer;
  }
`;

const BadgeIconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
`;
