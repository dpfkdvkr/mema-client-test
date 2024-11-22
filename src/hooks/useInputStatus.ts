import { useState, useEffect } from 'react';

export enum InputStatus {
  Default = 'default',
  Focused = 'focused',
  Error = 'error',
  Empty = 'empty',
}

interface UseInputStatusParams {
  showError: boolean;
  inputValue: string;
  isFocused: boolean;
}

export const useInputStatus = ({ showError, inputValue, isFocused }: UseInputStatusParams) => {
  const [inputStatus, setInputStatus] = useState<InputStatus>(InputStatus.Default);

  useEffect(() => {
    if (showError) {
      setInputStatus(InputStatus.Error);
    } else if (isFocused) {
      setInputStatus(InputStatus.Focused);
    } else if (!inputValue) {
      setInputStatus(InputStatus.Empty);
    } else {
      setInputStatus(InputStatus.Default);
    }
  }, [showError, isFocused, inputValue]);

  return inputStatus;
};
