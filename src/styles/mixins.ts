import { css } from 'styled-components';
import { theme } from '@/styles/theme';

export const fontStyles = {
  text: (size: keyof typeof theme.fonts.text) => css`
    font-size: ${({ theme }) => theme.fonts.text[size].fontSize};
    line-height: ${({ theme }) => theme.fonts.text[size].lineHeight};
    font-family: ${({ theme }) => theme.fonts.text[size].fontFamily};
    font-weight: ${({ theme }) => theme.fonts.text[size].fontWeight};
    letter-spacing: ${({ theme }) => theme.fonts.text[size].letterSpacing};
  `,
  title: (size: keyof typeof theme.fonts.title) => css`
    font-size: ${({ theme }) => theme.fonts.title[size].fontSize};
    line-height: ${({ theme }) => theme.fonts.title[size].lineHeight};
    font-family: ${({ theme }) => theme.fonts.title[size].fontFamily};
    font-weight: ${({ theme }) => theme.fonts.title[size].fontWeight};
    letter-spacing: ${({ theme }) => theme.fonts.title[size].letterSpacing};
  `,
};
