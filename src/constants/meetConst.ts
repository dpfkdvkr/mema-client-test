export const MEET_STATUS = {
  SCHEDULE_BEFORE_USE: 'SCHEDULE_BEFORE_USE', // 일정 이용 전 : voteExpiredDate 없을 때
  SCHEDULE_AFTER_USE: 'SCHEDULE_AFTER_USE', // 일정 이용 중 : meetDate 없고, voteExpiredDate 있고, 내가 투표 완료 했을 때
  PLACE_BEFORE_USE: 'PLACE_BEFORE_USE', // 일정 완료, 장소 이용 전 : meetDate 있고 voteExpiredLocation 없을 때
  PLACE_AFTER_USE: 'PLACE_AFTER_USE', // 장소 이용중 : meetLocation 없고, voteExpiredLocation 있을 때
  BILL: 'BILL', // 장소 완료, 정산 이용 전 : meetLocation 있는 경우 || 약속 끝! : meetDate 지난 경우
} as const;

export const MAX_UPCOMMING_MEET_COUNT = 4;
export const MAX_VISIBLE_MEET_MEMBER_ICON_COUNT = 7;
