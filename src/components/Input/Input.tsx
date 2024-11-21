'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { EyeIcon, EyeOffIcon } from '@/assets/icons/components';
import { theme } from '@/styles/theme';

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

const getColor = ({ showError = false, focused = false, isEmpty = false }): string => {
  if (showError) return theme.colors.red;
  if (focused) return theme.colors.primary.default;
  if (isEmpty) return theme.colors.gray[4];
  return theme.colors.gray[3];
};

const InputWrapper = styled.div<{ width?: string | number }>`
  margin-bottom: 1rem;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '100%')};
`;

const Label = styled.label<{ $showError: boolean; $focused: boolean }>`
  display: block;
  padding-bottom: 12px;
  color: ${({ $showError, $focused }) => getColor({ showError: $showError, focused: $focused })};
  font-size: ${(props) => props.theme.fonts.text['md'].fontSize};
  line-height: ${(props) => props.theme.fonts.text['md'].lineHeight};
  font-family: ${(props) => props.theme.fonts.text['md'].fontFamily};
  font-weight: ${(props) => props.theme.fonts.text['md'].fontWeight};
  letter-spacing: ${(props) => props.theme.fonts.text['md'].letterSpacing};
`;

const InputContainer = styled.div<{
  $showError: boolean;
  $focused: boolean;
  $isEmpty: boolean;
}>`
  position: relative;
  display: flex;
  height: 26px;
  align-items: flex-end;
  justify-content: flex-start;
  flex-shrink: 0;
  padding-bottom: 5px;
  border-bottom: ${({ $showError, $focused }) => ($showError || $focused ? '2px' : '1px')} solid
    ${({ $showError, $focused, $isEmpty }) =>
      getColor({ showError: $showError, focused: $focused, isEmpty: $isEmpty })};
  width: 100%;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0;
  font-size: ${(props) => props.theme.fonts.text['2xl'].fontSize};
  line-height: ${(props) => props.theme.fonts.text['2xl'].lineHeight};
  font-family: ${(props) => props.theme.fonts.text['2xl'].fontFamily};
  font-weight: ${(props) => props.theme.fonts.text['2xl'].fontWeight};
  letter-spacing: ${(props) => props.theme.fonts.text['2xl'].letterSpacing};

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[4]};
  }

  &:focus::placeholder {
    color: ${(props) => props.theme.colors.gray[3]};
  }
`;

// TODO: 추후 버튼 개발 완료 시 대치해야 함
const ToggleVisibilityButton = styled.button`
  margin-right: 8px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fonts.text['sm'].fontSize};
  line-height: ${(props) => props.theme.fonts.text['sm'].lineHeight};
  font-family: ${(props) => props.theme.fonts.text['sm'].fontFamily};
  font-weight: ${(props) => props.theme.fonts.text['sm'].fontWeight};
  letter-spacing: ${(props) => props.theme.fonts.text['sm'].letterSpacing};
`;

const Input: React.FC<InputProps> = ({
  label,
  placeholder = '',
  value = '',
  type = 'text',
  width = 400,
  onChange,
  errorMessage = '',
  showError = false,
  showToggleVisibility = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [isPasswordVisible, setIsPasswordVisible] = useState(type !== 'password');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <InputWrapper width={width}>
      {label && (
        <Label $showError={showError} $focused={focused}>
          {label}
        </Label>
      )}
      <InputContainer $showError={showError} $focused={focused} $isEmpty={!inputValue}>
        <StyledInput
          type={isPasswordVisible ? 'text' : type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {showToggleVisibility && type === 'password' && (
          <ToggleVisibilityButton type="button" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? (
              <EyeOffIcon width={24} height={24} />
            ) : (
              <EyeIcon width={24} height={24} />
            )}
          </ToggleVisibilityButton>
        )}
      </InputContainer>
      {showError && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input;
