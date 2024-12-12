import Button from '@/components/Button';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

export type MeetingStatus =
  | 'SCHEDULE_BEFORE_USE' // 일정 이용 전 : voteExpiredDate 없을 때
  | 'SCHEDULE_AFTER_USE' // 일정 이용 중 : meetDate 없고, voteExpiredDate 있고, 내가 투표 완료 했을 때
  | 'PLACE_BEFORE_USE' // 일정 완료, 장소 이용 전 : meetDate 있고 voteExpiredLocation 없을 때
  | 'PLACE_AFTER_USE' // 장소 이용중 : meetLocation 없고, voteExpiredLocation 있을 때
  | 'BILL'; // 장소 완료, 정산 이용 전 : meetLocation 있는 경우 || 약속 끝! : meetDate 지난 경우

type Props = {
  status: MeetingStatus;
  meetId: number;
};

const MeetingButtons = ({ status, meetId }: Props) => {
  const router = useRouter();
  const buttonConfig = {
    SCHEDULE_BEFORE_USE: {
      mainButton: {
        name: '만나는 날짜 정하기',
        route: `/meet/${meetId}/schedule/create`,
      },
      subButtons: [],
    },
    SCHEDULE_AFTER_USE: {
      mainButton: {
        name: '날짜 투표 현황 보기',
        route: `/meet/${meetId}/schedule`,
      },
      subButtons: [],
    },
    PLACE_BEFORE_USE: {
      mainButton: {
        name: '만나는 장소 정하기',
        route: `/meet/${meetId}/place`,
      },
      subButtons: [{ name: '만나는 날짜 확인하기', route: '/meet/1/schedule' }],
    },
    PLACE_AFTER_USE: {
      mainButton: {
        name: '장소 입력 현황 보기',
        route: `/meet/${meetId}/place`,
      },
      subButtons: [{ name: '만나는 날짜 확인하기', route: `/meet/${meetId}/schedule` }],
    },
    BILL: {
      mainButton: {
        name: '정산하기',
        route: '/meet/1/bill',
      },
      subButtons: [
        { name: '날짜 확인하기', route: `/meet/${meetId}/schedule` },
        { name: '장소 확인하기', route: `/meet/${meetId}/place` },
      ],
    },
  };

  const config = buttonConfig[status] || {
    mainButton: { name: '작업 없음', route: '/' },
    subButtons: [],
  };

  return (
    <ButtonContainer>
      <SubButtonContainer>
        {config.subButtons.map((subButton, index) => (
          <Button
            key={index}
            name={subButton.name}
            onClick={() => router.push(subButton.route)}
            buttonType="ghost"
          />
        ))}
      </SubButtonContainer>
      <Button name={config.mainButton.name} onClick={() => router.push(config.mainButton.route)} />
    </ButtonContainer>
  );
};

export default MeetingButtons;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 34px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
