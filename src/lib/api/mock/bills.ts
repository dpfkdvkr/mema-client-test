export const mockbillsData = {
  charges: [
    // 모든 정산 정보
    {
      chargeId: 1,
      content: '엽떡 정산해주세요', // 내용
      totalPrice: 28000, // 총 금액
      peopleNumber: 4, // 정산 총 인원수
      payeeNickname: '쌈뽕한메마러버', // 정산자 닉네임
      payers: [
        // 피정산자 정보
        {
          payerId: 1, // 피정산자 아이디
          payerNickname: '박짬뽕', // 피정산자 닉네임
        },
        {
          payerId: 3,
          payerNickname: '김짬뽕',
        },
        {
          payerId: 8,
          payerNickname: '이짬뽕',
        },
      ],
    },
    {
      chargeId: 2,
      content: '짜장면 정산해주세요',
      totalPrice: 36000,
      peopleNumber: 3,
      payeeNickname: '메마만세',
      payers: [
        {
          payerId: 1,
          payerNickname: '박짬뽕',
        },
        {
          payerId: 3,
          payerNickname: '김짬뽕',
        },
      ],
    },
  ],
};
