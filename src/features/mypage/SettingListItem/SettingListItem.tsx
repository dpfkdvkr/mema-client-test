import React from 'react';
import { ChevronRight } from 'react-feather';
import styled from 'styled-components';

type Props = {
  name: string;
  showButton?: boolean;
  onClick?: () => void;
};

const SettingListItem = ({ name, showButton = false, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {name}
      {showButton && <RightIcon />}
    </Container>
  );
};

export default SettingListItem;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  ${({ theme }) => theme.fonts.text['2xl']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[6]};
  cursor: pointer;
`;

const RightIcon = styled(ChevronRight)`
  stroke: ${({ theme }) => theme.colors.gray[4]};
`;
