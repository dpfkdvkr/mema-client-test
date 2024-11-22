'use client';

import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ToggleVisibilityButton from '@/components/common/ToggleVisibilityButton';
import { useInputStatus, InputStatus } from '@/hooks/useInputStatus';
import { fontStyles } from '@/styles/mixins';

interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'password' | 'email';
  width?: string | number;
  onChange?: (value: string) => void;
  showError?: boolean;
  errorMessage?: string;
  showToggleVisibility?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder = '',
  value = '',
  type = 'text',
  width = '400px',
  onChange,
  showError = false,
  errorMessage = '',
  showToggleVisibility = false,
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [isFocused, setFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(type !== 'password');
  const inputStatus = useInputStatus({ showError, inputValue, isFocused });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <InputWrapper width={width}>
      {label && <Label $inputStatus={inputStatus}>{label}</Label>}
      <InputContainer $inputStatus={inputStatus}>
        <StyledInput
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {showToggleVisibility && type === 'password' && (
          <ToggleVisibilityButton
            isVisible={isPasswordVisible}
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          />
        )}
      </InputContainer>
      {showError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div<{ width?: string | number }>`
  margin-bottom: 1rem;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '100%')};
`;

const Label = styled.label<{ $inputStatus: InputStatus }>`
  display: block;
  padding-bottom: 12px;
  font-size: ${(props) => props.theme.fonts.text['md'].fontSize};
  line-height: ${(props) => props.theme.fonts.text['md'].lineHeight};
  font-family: ${(props) => props.theme.fonts.text['md'].fontFamily};
  font-weight: ${(props) => props.theme.fonts.text['md'].fontWeight};
  letter-spacing: ${(props) => props.theme.fonts.text['md'].letterSpacing};
  color: ${({ $inputStatus, theme }) => {
    switch ($inputStatus) {
      case InputStatus.Error:
        return theme.colors.red;
      case InputStatus.Focused:
        return theme.colors.primary.default;
      case InputStatus.Default:
      default:
        return theme.colors.gray[3];
    }
  }};
`;

const InputContainer = styled.div<{ $inputStatus: InputStatus }>`
  position: relative;
  display: flex;
  height: 26px;
  align-items: flex-end;
  justify-content: flex-start;
  flex-shrink: 0;
  padding-bottom: 5px;
  width: 100%;

  border-bottom: ${({ $inputStatus, theme }) => {
    const borderWidth =
      $inputStatus === InputStatus.Error || $inputStatus === InputStatus.Focused ? '2px' : '1px';
    const borderColor = (() => {
      switch ($inputStatus) {
        case InputStatus.Error:
          return theme.colors.red;
        case InputStatus.Focused:
          return theme.colors.primary.default;
        case InputStatus.Empty:
          return theme.colors.gray[4];
        case InputStatus.Default:
        default:
          return theme.colors.gray[3];
      }
    })();
    return `${borderWidth} solid ${borderColor}`;
  }};
`;

const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  ${fontStyles.text('2xl')};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[4]};
  }
  &:focus::placeholder {
    color: ${({ theme }) => theme.colors.gray[3]};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  ${fontStyles.text('sm')};
  color: ${({ theme }) => theme.colors.red};
`;
