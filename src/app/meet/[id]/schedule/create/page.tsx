'use client';
import React, { useState } from 'react';
import VoteDueDate from '@/features/meet/schedule/VoteDueDate/VoteDueDate';
import useToggle from '@/lib/hooks/useToggle';
import Modal from '@/components/Modal';
import { Text } from '@/components/Modal/modalTypography';
import { useRouter } from 'next/navigation';
import TabBar from '@/components/TabBar';
import VoteDatesView from '@/features/meet/schedule/VoteDatesView/VoteDatesView';

function CreateSchedulePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpenModal, toggleOpenModal] = useToggle();
  const [voteDueDate, setVoteDueDate] = useState<Date>(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const prev = () => {
    setCurrentStep((prev) => --prev);
  };
  const next = () => {
    setCurrentStep((prev) => ++prev);
  };

  const steps = [
    {
      id: 1,
      content: <VoteDueDate onClickNext={next} date={voteDueDate} onChange={setVoteDueDate} />,
    },
    {
      id: 2,
      content: (
        <VoteDatesView
          type="create"
          onClickComplete={toggleOpenModal}
          selectedDates={selectedDates}
          onChangeDates={setSelectedDates}
        />
      ),
      onClickBack: prev,
    },
  ];

  return (
    <>
      <TabBar onClickBack={steps[currentStep]?.onClickBack} />
      {steps[currentStep].content}

      {isOpenModal && (
        <Modal type="Ok" onOk={() => router.push('/meet/1/schedule')} width={326}>
          <Text>투표를 완료했어요!</Text>
        </Modal>
      )}
    </>
  );
}

export default CreateSchedulePage;
