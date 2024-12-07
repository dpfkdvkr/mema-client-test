'use client';
import TabBar from '@/components/TabBar';
import styled from 'styled-components';
import SettingListItem from '@/features/mypage/SettingListItem';

const SettingMyPage = () => {
  return (
    <>
      <TabBar />
      <Container>
        <SettingListItem
          name="계정 관리"
          showButton={true}
          onClick={() => {
            console.log('계정 관리 페이지 이동(TBD)');
          }}
        />
        <SettingListItem
          name="약관 및 정책"
          showButton={true}
          onClick={() => {
            console.log('약관 및 정책 페이지 이동(TBD)');
          }}
        />
        <SettingListItem
          name="로그아웃"
          onClick={() => {
            console.log('로그아웃');
          }}
        />
        <SettingListItem
          name="탈퇴하기"
          onClick={() => {
            console.log('탈퇴');
          }}
        />
      </Container>
    </>
  );
};
export default SettingMyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
