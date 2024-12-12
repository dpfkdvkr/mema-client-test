'use client';
import React, { useState } from 'react';
import VoteDatesView from '@/features/meet/schedule/VoteDatesView';
import { useRouter } from 'next/navigation';
import TabBar from '@/components/TabBar';

function EditSchedulePage() {
  const router = useRouter();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const prev = () => {
    router.push('/meet/1/schedule');
  };

  return (
    <>
      <TabBar />
      <VoteDatesView
        type="edit"
        onClickComplete={prev}
        selectedDates={selectedDates}
        onChangeDates={setSelectedDates}
      />
    </>
  );
}

export default EditSchedulePage;
