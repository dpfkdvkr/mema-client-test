export type Bills = {
  charges: {
    chargeId: number;
    content: string;
    totalPrice: number;
    peopleNumber: number;
    payeeNickname: string;
    payers: {
      payerId: number;
      payerNickname: string;
    }[];
  }[];
};
