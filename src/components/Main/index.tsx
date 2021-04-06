import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon} from './styles';
import ProfilePage from '../ProfilePage'
const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Ronaldo bianco</strong>
          <span>62 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
              <HomeIcon className="active">

              </HomeIcon>
              <SearchIcon>

              </SearchIcon>
              <BellIcon>

              </BellIcon>
              <EmailIcon>

              </EmailIcon>
          </BottomMenu> 
    </Container>
  );
};

export default Main;
