import Button from '@/components/Button';
import Label from '@/components/common/Label';
import Input from '@/components/Input';
import InputWrapper from '@/components/Input/InputWrapper';
import { useInputState } from '@/hooks/useInputState';
import React from 'react';
import styled from 'styled-components';

function ManagementChangeName() {
  const name = useInputState();

  return (
    <>
      <InputWrapper isFocused={name.isFocused} isEmpty={name.isEmpty}>
        <Label isFocused={name.isFocused} isEmpty={name.isEmpty}>
          닉네임
        </Label>
        <Input
          type="text"
          value={name.value}
          onChange={name.handleChange}
          onFocus={name.handleFocus}
          onBlur={name.handleBlur}
        />
      </InputWrapper>
      <StyledButton name="미팅명 변경하기" />
    </>
  );
}

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 34px;
  width: calc(100% - 32px);
`;

export default ManagementChangeName;
