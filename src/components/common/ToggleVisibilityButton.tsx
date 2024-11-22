import React from 'react';
import styled from 'styled-components';
import { EyeIcon, EyeOffIcon } from '@/assets/icons/components';

interface ToggleVisibilityButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const Button = styled.button`
  margin-right: 8px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const ToggleVisibilityButton: React.FC<ToggleVisibilityButtonProps> = ({ isVisible, onClick }) => (
  <Button onClick={onClick} type="button">
    {isVisible ? <EyeOffIcon width={24} height={24} /> : <EyeIcon width={24} height={24} />}
  </Button>
);

export default ToggleVisibilityButton;
