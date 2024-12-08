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
export const createBill = async (data: {
  meetId: number;
  content: string;
  totalPrice: string;
  peopleNumber: string;
  payerIds: number[];
}) => {
  console.log(`Mock API 호출: /meets/${data.meetId}/charge, data:${data}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 201,
        message: '정상적으로 청구서가 생성되었습니다.',
        data: {
          billId: 1, // 생성된 청구서 ID
          meetId: data.meetId,
          content: data.content,
          totalPrice: data.totalPrice,
          peopleNumber: data.peopleNumber,
          payerIds: data.payerIds,
        },
      });
    }, 500);
  });
};
// export const createBill = async (data: {
//   meetId: number;
//   content: string;
//   totalPrice: string;
//   peopleNumber: string;
//   payerIds: number[];
// }) => {
//   await defaultAxios.post(`/meets/${data.meetId}/charge`, {
//     content: data.content,
//     totalPrice: data.totalPrice,
//     peopleNumber: data.peopleNumber,
//     payerIds: data.payerIds,
//   });
// };
