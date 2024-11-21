'use client';
import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  name: string;
  type?: 'default' | 'square' | 'ghost';
  fontStyle?: 'bold' | 'normal' | 'thin';
};

const Button = ({ name, type = 'default', fontStyle = 'bold', ...props }: Props) => {
  return (
    <StyledButton buttonType={type} fontStyle={fontStyle} {...props}>
      {name}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  buttonType: 'default' | 'square' | 'ghost';
  fontStyle: 'bold' | 'normal' | 'thin';
}>`
  width: 100%;
  height: 55px;
  cursor: pointer;
  border: 1px solid;

  ${({ buttonType, theme }) => {
    switch (buttonType) {
      case 'ghost':
        return css`
          background-color: transparent;
          border-radius: ${theme.borderRadius.medium};
          border-color: ${theme.colors.primary.default};
          color: ${theme.colors.primary.default};
          &:active {
            border-color: ${theme.colors.primary.darker};
            color: ${theme.colors.primary.darker};
            background-color: rgba(0, 98, 209, 0.15);
          }
          &:disabled {
            background-color: transparent;
            border-color: ${theme.colors.gray[4]};
            color: ${theme.colors.gray[4]};
          }
        `;
      case 'square':
        return css`
          background-color: ${theme.colors.primary.default};
          border-radius: 0;
          border-color: transparent;
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.primary.lighter};
          }
          &:active {
            background-color: ${theme.colors.primary.darker};
          }
          &:disabled {
            background-color: ${theme.colors.gray[5]};
          }
        `;
      case 'default':
      default:
        return css`
          background-color: ${theme.colors.primary.default};
          border-radius: ${theme.borderRadius.medium};
          border-color: transparent;
          color: ${theme.colors.white};
          &:hover {
            background-color: ${theme.colors.primary.lighter};
          }
          &:active {
            background-color: ${theme.colors.primary.darker};
            color: ${theme.colors.darker};
          }
          &:disabled {
            background-color: ${theme.colors.gray[5]};
          }
        `;
    }
  }}

  ${({ fontStyle, theme }) => {
    switch (fontStyle) {
      case 'thin':
        return css`
          ${theme.fonts.text.lg};
        `;
      case 'normal':
        return css`
          ${theme.fonts.text['2xl']};
        `;
      case 'bold':
      default:
        return css`
          ${theme.fonts.title.sm};
        `;
    }
  }}
`;

export default Button;
