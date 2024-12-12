import styled from 'styled-components';
import Button from '@/components/Button';
import { ScheduleStatus } from '@/types/schedules';
import { SCHEDULE_STATUS } from '@/constants/scheduleConst';
import { useRouter } from 'next/navigation';

interface Props {
  type: ScheduleStatus;
  onClickSelectFinalDate: () => void;
}

const CalendarViewButtons = ({ type, onClickSelectFinalDate }: Props) => {
  const router = useRouter();
  return (
    <Container>
      {type === SCHEDULE_STATUS.IN_PROGRESS && (
        <Button name="수정하기" onClick={() => router.push('/meet/1/schedule/edit')} />
      )}
      {type === SCHEDULE_STATUS.NEED_REVOTE && (
        <>
          <Button name="재투표하기" onClick={() => router.push('/meet/1/schedule/create')} />
          <Button
            name="수정하기"
            buttonType="gray"
            onClick={() => router.push('/meet/1/schedule/edit')}
          />
        </>
      )}
      {type === SCHEDULE_STATUS.NEED_COMPLETE && (
        <>
          <Button
            name="재투표하기"
            buttonType="gray"
            onClick={() => router.push('/meet/1/schedule/create')}
          />
          <Button name="날짜 고르기" onClick={onClickSelectFinalDate} />
        </>
      )}
    </Container>
  );
};

export default CalendarViewButtons;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: absolute;
  bottom: 34px;
  width: calc(100% - 32px);
`;
