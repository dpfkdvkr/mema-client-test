import { Station } from '@/types/locate';
import { defaultAxios } from './defaultAxios';

// 지하철역 전체조회
export const getStations = async (meetId: number) => {
  return await defaultAxios.get(`/meets/${meetId}/station/total`);
};

// 내 출발위치 조회
export const getMyLocation = async (meetId: number) => {
  return await defaultAxios.get(`/meets/${meetId}/vote/location/my`);
};

// 전체 출발위치 조회
export const getTotalLocation = async (meetId: number) => {
  return await defaultAxios.get(`/meets/${meetId}/vote/location/total`);
};

// 출발위치 투표생성
export const createVoteLocation = async ({
  meetId,
  station,
}: {
  meetId: number;
  station: Station;
}) => {
  return await defaultAxios.post(`/meets/${meetId}/vote/location`, station);
};
