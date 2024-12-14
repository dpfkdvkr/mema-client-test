'use client';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MyPageProfileIcon from '@/features/mypage/MyPageProfileIcon/MyPageProfileIcon';
import TabBar from '@/components/TabBar';
import { useInputState } from '@/lib/hooks/useInputState';
import MyPageNicknameInput from '@/features/mypage/MyPageNicknameInput';
import OwnedBadgeGrid from '@/features/mypage/OwnedBadgeGrid';
import ColorPalette from '@/features/mypage/ColorPalette';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Account } from '@/types/account';
import { getUser, updateUser } from '@/lib/api/account';
import { MAX_BADGE_COUNT } from '@/constants/accountConst';

const EditMyPage = () => {
  const nickname = useInputState();
  const [puzzleId, setPuzzleId] = useState<number>(1);
  const [puzzleColor, setPuzzleColor] = useState<string>('blue');
  const { data: user } = useQuery<AxiosResponse<Account>>({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const updateMyPageMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {},
  });

  const handleUpdate = useCallback(() => {
    updateMyPageMutation.mutate({
      nickname: nickname.value,
      puzzleId,
      puzzleColor,
    });
  }, [nickname.value, puzzleId, puzzleColor, updateMyPageMutation]);

  const handleNicknameBlur = () => {
    nickname.handleBlur();
    handleUpdate();
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    nickname.setValue(user.data.nickname);
    setPuzzleId(user.data.puzzleId);
    setPuzzleColor(user.data.puzzleColor);
  }, [user]);

  useEffect(() => {
    handleUpdate();
  }, [puzzleId, puzzleColor]);

  return (
    <>
      <TabBar />
      <Container>
        <MyPageProfileIcon puzzleId={puzzleId} puzzleColor={puzzleColor} />
        <MyPageNicknameInput nickname={nickname} onBlur={handleNicknameBlur} />
        <OwnedBadgeGrid
          selectedId={puzzleId}
          ownedBadges={Array.from({ length: MAX_BADGE_COUNT }).map((_, i) => i + 1)}
          onClick={(id: number) => setPuzzleId(id)}
        />
        <ColorPalette
          selectedColor={puzzleColor}
          onClick={(color: string) => setPuzzleColor(color)}
        />
      </Container>
    </>
  );
};
export default EditMyPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
