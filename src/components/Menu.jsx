import React from 'react';
import styled from 'styled-components';
import { images } from '../constants';

const Container = styled.div`
  flex: 1;
  background-color: var(--sidebar-background-color);
  height: 100vh;
  color: var(--white-color);
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Img = styled.img`
  height: 25px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={images.logo} />
          LamaTube
        </Logo>
      </Wrapper>
    </Container>
  );
};

export default Menu;
