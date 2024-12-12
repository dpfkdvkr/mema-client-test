'use client';
import React, { useCallback, useEffect, useState } from 'react';
import TabBar from '@/components/TabBar';
import MeetingHeader from '@/features/meet/main/MeetingHeader';
import BasicLayout from '@/components/Layouts/BasicLayout';
import MeetingButtons from '@/features/meet/main/MeetingButtons';
import Modal from '@/components/Modal';
import { LargeText, Text } from '@/components/Modal/modalTypography';
import useToggle from '@/lib/hooks/useToggle';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Meet, MeetStatus } from '@/types/meets';
import { getMeet } from '@/lib/api/meets';
import { useParams } from 'next/navigation';
import { toDate } from '@/lib/utils/dateUtils';
import { getBills } from '@/lib/api/bills';
import { Bills } from '@/types/bills';
import styled from 'styled-components';
import MeetingBillItem from '@/features/meet/main/MeetingContents/MeetingBillItem';
import MeetingDateItem from '@/features/meet/main/MeetingContents/MeetingDateItem';
import MeetingPlaceItem from '@/features/meet/main/MeetingContents/MeetingPlaceItem';
import { getAllSchedules } from '@/lib/api/schedules';
import { AllSchedule } from '@/types/schedules';
import { MEET_STATUS } from '@/constants/meetConst';

function MeetIdPage() {
  const params = useParams();
  const meetId = (params?.id && parseInt(params.id[0], 10)) || null;
  const [isOpenModal, toggleOpenModal] = useToggle();
  const [meetStatus, setMeetStatus] = useState<MeetStatus>(MEET_STATUS.SCHEDULE_BEFORE_USE);

  const { data: meet } = useQuery<AxiosResponse<Meet>>({
    queryKey: ['meet', meetId],
    queryFn: () => getMeet(meetId as number),
    enabled: meetId !== null,
  });

  const { data: schedules } = useQuery<AxiosResponse<AllSchedule>>({
    queryKey: ['schedules', meetId],
    queryFn: () => getAllSchedules(meetId as number),
    enabled: meetId !== null,
  });

  // 장소 투표 관련 API 연동해서 count 이용해야 함.
  const { data: bills } = useQuery<AxiosResponse<Bills[]>>({
    queryKey: ['bills', meetId],
    queryFn: () => getBills(meetId as number),
    enabled: meetId !== null,
  });

  const getScheduleUniqueVoterCount = useCallback(() => {
    const uniqueMemberIds = new Set();

    schedules?.data.voteDates.forEach((voteDate) => {
      voteDate.members.forEach((member) => {
        uniqueMemberIds.add(member.meetMemberId);
      });
    });

    return uniqueMemberIds.size;
  }, [schedules]);

  const findMyMeetId = (meet: Meet) => {
    return meet.members.find((member) => member.userInfo.isMe === true)?.meetMemberId;
  };

  const hasUserVotedSchedule = (schedules: AllSchedule, meetId?: number): boolean => {
    if (!meetId) return false;
    return schedules.voteDates.some((voteDate) =>
      voteDate.members.some((member) => member.meetMemberId === meetId),
    );
  };

  useEffect(() => {
    if (!meet || !schedules) return;
    const { meetDate, voteExpiredDate, voteExpiredLocation, meetLocation } = meet.data;
    if (voteExpiredLocation === null) {
      setMeetStatus(MEET_STATUS.SCHEDULE_BEFORE_USE);
      console.log(MEET_STATUS.SCHEDULE_BEFORE_USE);
    } else if (!meet.data.meetDate && voteExpiredDate) {
      const myMeetId = findMyMeetId(meet.data);
      hasUserVotedSchedule(schedules.data, myMeetId);
      setMeetStatus(MEET_STATUS.SCHEDULE_BEFORE_USE);
    } else if (!meetDate && !voteExpiredLocation) {
      setMeetStatus(MEET_STATUS.PLACE_BEFORE_USE);
    } else if (meetLocation) {
      setMeetStatus(MEET_STATUS.BILL);
    }
  }, [meet, schedules]);

  if (meetId === null || !meet || !bills || !schedules) return;

  return (
    <BasicLayout>
      <TabBar />
      {/*<MeetingHeader joinCode={meet?.data.joinCode} onClickShare={toggleOpenModal} /> TODO: 추후 단건 조회 API에 joinCode 포함되면 작업 필요*/}
      <MeetingHeader
        meetName={meet.data.meetName}
        members={meet.data.members}
        joinCode="1234"
        onClickShare={toggleOpenModal}
      />
      <Container>
        <MeetingDateItem
          totalMembers={meet.data.members.length}
          voteExpiredDate={toDate(meet.data.voteExpiredDate)}
          meetDate={meet.data.meetDate}
          votedMembers={getScheduleUniqueVoterCount()}
        />
        <MeetingPlaceItem
          totalMembers={meet.data.members.length}
          voteExpiredLocation={toDate(meet.data.voteExpiredLocation)}
          meetLocation={meet.data.meetLocation}
          votedMembers={0}
        />
        <MeetingBillItem billCount={bills.data.length} />
      </Container>
      {/*<MeetingContents*/}
      {/*  voteExpiredDate={toDate(meet?.data.voteExpiredDate)}*/}
      {/*  meetDate={toDate(meet?.data.meetDate)}*/}
      {/*  voteExpiredLocation={toDate(meet?.data.voteExpiredLocation)}*/}
      {/*  meetLocation={meet?.data.meetLocation || null}*/}
      {/*  billCount={bills?.data.length}*/}
      {/*/>*/}
      {/*  voteExpiredDate: Date | null;
            meetDate: Date | null;
            voteExpiredLocation: Date | null;
            meetLocation: string | null;
            billCount: number;*/}
      <MeetingButtons meetId={meetId} status={meetStatus} />
      {isOpenModal && (
        <Modal type="Ok" onOk={toggleOpenModal} width={326}>
          <Text>
            참여코드 복사 완료!
            <br />
          </Text>
          <LargeText>1234</LargeText>
        </Modal>
      )}
    </BasicLayout>
  );
}

export default MeetIdPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
