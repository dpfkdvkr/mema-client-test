import styled from 'styled-components';
import MemaIcon from '@/assets/icons/svg/mema.svg';
import SelectedMemaIcon from '@/assets/icons/svg/memaFilled.svg';
import CalendarIcon from '@/assets/icons/svg/calendar.svg';
import SelectedCalendarIcon from '@/assets/icons/svg/calendarFilled.svg';
import { useState } from 'react';

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState<'calendar' | 'mema'>('calendar');

  return (
    <Container>
      <NavItem
        onClick={() => {
          setActiveTab('calendar');
          alert('캘린더 클릭');
        }}
      >
        {activeTab === 'calendar' ? <SelectedCalendarIcon /> : <CalendarIcon />}
      </NavItem>
      <NavItem
        onClick={() => {
          setActiveTab('mema');
          alert('메마 클릭');
        }}
      >
        {activeTab === 'mema' ? <SelectedMemaIcon /> : <MemaIcon />}
      </NavItem>
    </Container>
  );
};

export default BottomNavigation;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.gray[5]};
  z-index: ${({ theme }) => theme.zIndex.navigation};
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding-bottom: 34px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 16px 0;
  svg {
    width: 24px;
    height: 24px;
  }
`;
