'use client';
import styled from 'styled-components';
import React, { useState } from 'react';
import { UseInputStateReturn } from '@/hooks/useInputState';
import InputWrapper from '@/components/Input/InputWrapper';
import Label from '@/components/common/Label';
import Input from '@/components/Input';
import ToggleVisibilityButton from '@/components/common/ToggleVisibilityButton';
import Button from '@/components/Button';

type AccountInputsProps = {
  onClickNext: () => void;
  password: UseInputStateReturn;
};

const PasswordInput: React.FC<AccountInputsProps> = ({ onClickNext, password }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <Container>
        <InputWrapper isFocused={password.isFocused} isEmpty={password.isEmpty}>
          <Label isFocused={password.isFocused} isEmpty={password.isEmpty}>
            비밀번호
          </Label>
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            value={password.value}
            placeholder="비밀번호를 입력하세요"
            onChange={password.handleChange}
            onFocus={password.handleFocus}
            onBlur={password.handleBlur}
          />
          <ToggleVisibilityButton
            isVisible={isPasswordVisible}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          />
        </InputWrapper>
      </Container>
      <StyledButton name="다음으로" disabled={!password.value} onClick={onClickNext} />
    </>
  );
};

export default PasswordInput;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 34px;
  width: calc(100% - 32px);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const VerificationButton = styled.button`
  ${({ theme }) => theme.fonts.text.sm};
  color: white;
  background-color: ${({ theme }) => theme.colors.primary.default};
  border-radius: 15px;
  border: none;
  padding: 4px 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.lighter};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary.darker};
  }
  &:disabled {
    background-color: white;
    color: ${({ theme }) => theme.colors.gray[4]};
    border: 1px solid ${({ theme }) => theme.colors.gray[4]};
  }
`;
