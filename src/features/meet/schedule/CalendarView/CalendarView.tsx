'use client';
import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';
import TabBar from '@/components/TabBar';
import { formatDate } from '@/lib/utils/formatDate';
import StaticCalendar from '@/components/CustomCalendar/StaticCalendar';
import { useRouter } from 'next/navigation';

type VoteDatesProps = {
  type: 'complete' | 'inProgress';
  onClickBack: () => void;
  onClickConfirmDate: () => void;
  selectedDates: Date[];
  onChangeDate: (dates: Date) => void;
  clickedDate: Date | null;
};

const CalendarView = ({
  type = 'inProgress',
  onClickBack,
  onClickConfirmDate,
  selectedDates,
  onChangeDate,
  clickedDate,
}: VoteDatesProps) => {
  const router = useRouter();
  return (
    <>
      <Container>
        <TabBar onClick={onClickBack} />
        {type === 'complete' && <p className="title">11월 29일에 만나요!</p>}
        {type === 'inProgress' && (
          <p className="title">
            만남이 가능한 날짜를
            <br />
            모두 선택해주세요!
          </p>
        )}

        <StaticCalendar
          startDay={new Date()}
          allSelectedDates={selectedDates}
          mySelectedDates={selectedDates}
          maxSelectableDate={60}
          onClick={(date) => onChangeDate(date)}
          clickedDate={clickedDate}
        />

        <StyledDiv>
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
        </StyledDiv>

        {type === 'inProgress' && (
          <ButtonContainer>
            <Button
              name="재투표하기"
              buttonType="gray"
              onClick={() => {
                router.push('/meet/1/schedule/edit');
              }}
              disabled={selectedDates.length === 0}
            />
            <Button
              name="날짜 고르기"
              onClick={onClickConfirmDate}
              disabled={selectedDates.length === 0} // Todo: 조건은 !(미팅원 모두 입력 완료 && 투표 마감)
            />
          </ButtonContainer>
        )}
      </Container>
    </>
  );
};

export default CalendarView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    ${({ theme }) => theme.fonts.title.md};
    margin: 20px 0 20px;
  }
`;

const StyledDiv = styled.div`
  padding: 12px 16px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.gray[6]};
  border-radius: 15px;
  color: black;
  ${({ theme }) => theme.fonts.text.xl};
  .grayish-desc {
    ${({ theme }) => theme.fonts.text.xl};
    color: ${({ theme }) => theme.colors.gray[2]};
  }
  .emphasize-desc {
    ${({ theme }) => theme.fonts.title.xs};
    color: ${({ theme }) => theme.colors.primary.default};
  }
  .bold-desc {
    ${({ theme }) => theme.fonts.title.xs};
  }
  .btnGroup {
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  bottom: 34px;
  width: calc(100% - 32px);
  gap: 8px;
`;
