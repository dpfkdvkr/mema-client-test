export const SCHEDULE_STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  NEED_REVOTE: 'NEED_REVOTE',
  NEED_COMPLETE: 'NEED_COMPLETE',
  COMPLETED: 'COMPLETED',
} as const;

export const MAX_SCHEDULE_SELECTABLE_DATE = 60;