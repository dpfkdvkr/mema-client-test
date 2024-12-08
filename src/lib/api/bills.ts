import { Bills } from '@/types/bills';
import { AxiosResponse } from 'axios';
import { mockbillsData } from './mock/bills';
import { defaultAxios } from './defaultAxios';

// 정산 전체조회
export const getBills = async (meetId: number): Promise<AxiosResponse<Bills>> => {
  console.log(`Mock API 호출: /meets/${meetId}/charge/total`);
  return new Promise<AxiosResponse<Bills>>((resolve) =>
    setTimeout(
      () =>
        resolve({
          data: mockbillsData,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
          request: {},
        } as AxiosResponse<Bills>),
      500,
    ),
  );
};
// export const getBills = async (meetId: number) => {
//   return await defaultAxios.get(`/meets/${meetId}/charge/total`);
// };

// 정산 생성
export const createBill = async ({
  meetId,
  data,
}: {
  meetId: number;
  data: {
    content: string;
    totalPrice: number;
    peopleNumber: number;
    memberIds: number[];
  };
}) => {
  console.log(`Mock API 호출: /meets/${meetId}/charge CREATE, data:${data}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 201,
        message: '정상적으로 정산이 생성되었습니다.',
        data,
      });
    }, 500);
  });
};
// export const createBill = async (
//   meetId: number,
//   data: {
//     content: string;
//     totalPrice: string;
//     peopleNumber: string;
//     memberIds: number[];
//   },
// ) => {
//   await defaultAxios.post(`/meets/${meetId}/charge`, data);
// };
