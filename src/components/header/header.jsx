import React from 'react';
import HeaderGrid, { Motto, Title, DragonImg } from './headerStyle';
import Cartoon from '../../images/dragon.png';

const Header = () => (
  <>
    <HeaderGrid>
      <Title>Characters</Title>
      <Motto>Dungeons & Dragons</Motto>
      <DragonImg src={Cartoon} alt="A cartoon dragon." />
    </HeaderGrid>
  </>
);

export default Header;
