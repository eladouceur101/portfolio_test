import styled from 'styled-components';

const HeaderGrid = styled.div`
  display: grid;
  grid-template-areas: 'motto title b';
  grid-template-columns: 1fr 3fr 1fr;
  font-family: 'Audiowide';
  background: #0f4737;
`;

export const Title = styled.h1`
  grid-area: title;
  justify-self: center;
  align-self: center;
  color: #f6e6cc;
`;

export const Motto = styled.p`
  grid-area: motto;
  justify-self: center;
  align-self: center;
  color: #f6e6cc;
`;

export const DragonImg = styled.img`
  grid-area: b;
  justify-self: center;
  align-self: center;
  height: 8vh;
  border-style: solid;
  border-color: #f6e6cc;
  border-width: 2px;
  border-radius: 10px;
  margin: 1vh;
  padding: 1vh;
`;

export default HeaderGrid;
