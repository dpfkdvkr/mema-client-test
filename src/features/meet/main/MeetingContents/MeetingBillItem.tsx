import React from 'react';
import BillStatusItem from '@/features/meet/main/BillStatusItem';

type Props = {
  billCount: number;
};

const MeetingBillItem = ({ billCount }: Props) => {
  const status: 'notStarted' | 'completed' = billCount === 0 ? 'notStarted' : 'completed';

  return <BillStatusItem status={status} count={billCount} />;
};

export default MeetingBillItem;
