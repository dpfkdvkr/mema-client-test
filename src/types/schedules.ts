import { SCHEDULE_STATUS } from '@/constants/scheduleConst';

export type ScheduleStatus = (typeof SCHEDULE_STATUS)[keyof typeof SCHEDULE_STATUS];
