import { SCHEDULE_STATUS } from '@/constants/scheduleConst';

export type ScheduleStatus = (typeof SCHEDULE_STATUS)[keyof typeof SCHEDULE_STATUS];

export type ScheduleMember = {
  meetMemberId: number; // 멤버 고유 ID
  meetMemberName: string; // 멤버 이름
};

export type VoteDate = {
  date: string; // 투표 날짜 (YYYY-MM-DD 형식)
  members: ScheduleMember[]; // 날짜에 투표한 멤버 목록
};

export type AllSchedule = {
  voteDates: VoteDate[]; // 투표 날짜 및 멤버 목록 배열
};

export type MySchedule = {
  meetMemberId: number; // 멤버 고유 ID
  meetMemberName: string; // 멤버 이름
  date: string[]; // 날짜 배열 (YYYY-MM-DD 형식)
};
