import React from 'react';
import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowPage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar></Avatar>
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Ronaldo bainco</h1>
        <h2>@ronaldosch</h2>

        <p>Developer Front-End</p>
        <ul>
          <li>
            <LocationIcon />
            Curitiba, PR
          </li>
          <li>
            <CakeIcon />
            Nascido em 22 de Junho de 1996
          </li>
        </ul>

        <FollowPage>
          <span>
            Seguindo <strong> 93</strong>
          </span>
          <span>
            <strong>234 </strong> Seguidores
          </span>
        </FollowPage>
      </ProfileData>
          
      <Feed/>
    </Container>
  );
};

export default ProfilePage;
