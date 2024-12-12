'use client';
import React from 'react';
import styled from 'styled-components';
import { formatDate } from '@/lib/utils/formatDate';
import CustomCalendar from '@/components/CustomCalendar/CustomCalendar';
import { ScheduleStatus } from '@/types/schedules';
import { MAX_SCHEDULE_SELECTABLE_DATE, SCHEDULE_STATUS } from '@/constants/scheduleConst';
import CalendarTitle from '@/features/meet/schedule/CalendarTitle';

type VoteDatesProps = {
  status: ScheduleStatus;
  onClickConfirmDate: () => void;
  selectedDates: Date[];
  onChangeDate: (dates: Date) => void;
  clickedDate: Date | null;
};

const CalendarView = ({
  status = SCHEDULE_STATUS.IN_PROGRESS,
  selectedDates,
  onChangeDate,
  clickedDate,
}: VoteDatesProps) => {
  return (
    <>
      <Container>
        <CalendarTitle status={status} />

        {(status === SCHEDULE_STATUS.IN_PROGRESS || status === SCHEDULE_STATUS.NEED_REVOTE) && (
          <CustomCalendar
            mode="view"
            voteStartDay={new Date()}
            allSelectedDates={selectedDates}
            mySelectedDates={[selectedDates[1]]}
            maxSelectableDate={MAX_SCHEDULE_SELECTABLE_DATE}
            onClick={(date) => onChangeDate(date)}
            clickedDate={clickedDate}
          />
        )}
        {status === SCHEDULE_STATUS.NEED_COMPLETE && (
          <CustomCalendar
            mode="complete"
            voteStartDay={new Date()}
            allSelectedDates={selectedDates}
            mySelectedDates={[selectedDates[1]]}
            maxSelectableDate={MAX_SCHEDULE_SELECTABLE_DATE}
            onClick={(date) => onChangeDate(date)}
            clickedDate={clickedDate}
          />
        )}
        {status === SCHEDULE_STATUS.COMPLETED && (
          <CustomCalendar
            mode="result"
            voteStartDay={new Date()}
            allSelectedDates={selectedDates}
            mySelectedDates={[selectedDates[1]]}
            maxSelectableDate={MAX_SCHEDULE_SELECTABLE_DATE}
            onClick={(date) => onChangeDate(date)}
            clickedDate={clickedDate}
          />
        )}

        <Description>
          {clickedDate ? (
            <>
              <span className="emphasize-desc">{formatDate(clickedDate, 'MM월 DD일')}</span>
              에 만날 수 있는 사람은
              <br />
              <span className="bold-desc">닉네임, 닉네임, 닉네임 이에요.</span>
            </>
          ) : (
            <p className="grayish-desc">
              날짜를 선택하면 그 날에
              <br />
              누구와 만날 수 있는지 알 수 있어요!
            </p>
          )}
        </Description>
        {/*<>*/}
        {/*  <span className="emphasize-desc">{formatDate(clickedDate, "MM월 DD일")}</span>*/}
        {/*  에 만날 수 있는 사람은 아직 없어요.*/}
        {/*</>*/}
      </Container>
    </>
  );
};

export default CalendarView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  padding: 12px 16px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.gray[6]};
  border-radius: 15px;
  color: black;
  ${({ theme }) => theme.fonts.text.xl};
  .grayish-desc {
    color: ${({ theme }) => theme.colors.gray[2]};
  }
  .emphasize-desc {
    ${({ theme }) => theme.fonts.title.xs};
    color: ${({ theme }) => theme.colors.primary.default};
  }
  .bold-desc {
    ${({ theme }) => theme.fonts.title.xs};
  }
`;
