// 미팅 단건 조회 response
import { MEET_STATUS } from '@/constants/meetConst';

export type Member = {
  meetMemberId: number; // 미팅에서의 유저 고유 ID
  userInfo: {
    userId: number; // 유저 고유 ID
    nickname: string; // 닉네임
    puzzleId: number; // 프로필 퍼즐 ID
    puzzleColor: string; // 프로필 퍼즐 색상
    isMe?: boolean; // 본인인지 아닌지
  };
};

export type Meet = {
  meetId: number; // 약속 고유 ID
  meetName: string; // 약속명
  meetState: string; // 약속 상태값
  meetDate: null | string; // 만남 날짜
  meetLocation: null | string; // 만남 장소
  voteExpiredDate: string; // 날짜 투표 만료일
  voteExpiredLocation: string; // 장소 투표 만료일
  members: Member[];
};

// 홈 미팅 리스트 조회 (최대 4 + 4 = 8개의 미팅만 조회 가능)
// export type HomeMeets = {};

export type MeetStatus = (typeof MEET_STATUS)[keyof typeof MEET_STATUS];
