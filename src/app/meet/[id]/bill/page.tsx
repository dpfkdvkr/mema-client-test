'use client';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { DisabledText, Emphasize, Text } from '@/components/Modal/modalTypography';
import TabBar from '@/components/TabBar';
import BillContent from '@/features/meet/bill/BillContent';
import BillMyPay from '@/features/meet/bill/BillMyPay';
import BillNull from '@/features/meet/bill/BillNull';
import useToggle from '@/lib/hooks/useToggle';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

function BillPage() {
  const router = useRouter();
  const [isOpenShareModal, toggleOpenShareModal] = useToggle();
  const [isOpenNotUserModal, toggleOpenNotUserModal] = useToggle();
  const [isOpenUserModal, toggleOpenUserModal] = useToggle();
  const [isOpenDeleteModal, toggleOpenDeleteModal] = useToggle();
  const [isOpenConfirmModal, toggleOpenConfirmModal] = useToggle();

  const onClickShare = () => {
    //캡쳐로직구현
    toggleOpenShareModal();
  };

  return (
    <>
      <TabBar rightType="shareBtn" onClick={onClickShare} />
      {/* <BillNull /> */}
      <BillMyPay />
      <BillContent />
      <StyledButton name="정산 시작하기" onClick={() => router.push('/meet/1/bill/create')} />

      {isOpenShareModal && (
        <Modal type="Ok" onOk={toggleOpenShareModal} width={294}>
          <Text>정산 내역이 캡쳐되었어요!</Text>
        </Modal>
      )}
      {isOpenNotUserModal && (
        <Modal type="Ok" onOk={toggleOpenNotUserModal} width={294}>
          <Text>정산자만 수정할 수 있어요!</Text>
        </Modal>
      )}
      {isOpenUserModal && (
        <Modal
          type="OkCancel"
          onOk={() => {
            toggleOpenUserModal();
            toggleOpenDeleteModal();
          }}
          onClose={toggleOpenUserModal}
          okButtonName="수정하기"
          closeButtonName="삭제하기"
          width={294}
        >
          <Text>
            <Emphasize>봉추찜닭</Emphasize>
            <br />
            정산을 수정/삭제하시겠습니까?
          </Text>
        </Modal>
      )}
      {isOpenDeleteModal && (
        <Modal
          type="OkCancel"
          onOk={() => {
            toggleOpenDeleteModal();
            toggleOpenConfirmModal();
          }}
          onClose={toggleOpenDeleteModal}
          okButtonName="삭제"
          closeButtonName="취소"
          width={294}
        >
          <Text>
            <Emphasize>봉추찜닭</Emphasize>을 삭제하시겠어요?
            <DisabledText>정산을 삭제하면 복구할 수 없어요.</DisabledText>
          </Text>
        </Modal>
      )}
      {isOpenConfirmModal && (
        <Modal type="Ok" onOk={toggleOpenConfirmModal} width={294}>
          <Text>정산이 삭제되었어요.</Text>
        </Modal>
      )}
    </>
  );
}

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 34px;
  width: 358px;
  @media (max-width: 390px) {
    width: calc(100% - 32px);
  }
`;

export default BillPage;
