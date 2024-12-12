import { defaultAxios } from '@/lib/api/defaultAxios';

export const getAllSchedules = async (meetId: number) => {
  return await defaultAxios.get(`/meets/${meetId}/vote/date/total`);
};

export const getMySchedules = async (meetId: number) => {
  return await defaultAxios.get(`/meets/${meetId}/vote/date/my`);
};
