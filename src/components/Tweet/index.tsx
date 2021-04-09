import React from 'react';

import {
  Container,
  Retweeted,
  RocketIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Time,
  Description,
  ImageContent,
  Icons,
  Status,
  Comment,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketIcon />
        Voce Retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Ronaldo</strong>
            <span>@Ronaldo</span>
            <Dot />
            <Time>24 de Junho</Time>
            <Description></Description>
          </Header>
          <ImageContent></ImageContent>
          <Icons>
            <Status>
              <Comment/>18
            </Status>
            <Status>
              <RetweetIcon/>23
            </Status>
            <Status>
              <LikeIcon/>99
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
