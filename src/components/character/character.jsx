import React from 'react';
import Grid, {
  Name,
  CharacterImg,
  GenGrid,
  GenTitle,
  Info,
} from './characterStyle';
import Aisha from '../../images/aisha.jpg';

const Character = () => (
  <Grid>
    <Name>Aisha Clan-Clan</Name>
    <GenGrid>
      <GenTitle style={{ gridArea: 'ct' }}>Class:</GenTitle>
      <Info style={{ gridArea: 'cl' }}>Zealot Barbarian</Info>
      <GenTitle style={{ gridArea: 'bt' }}>Background:</GenTitle>
      <Info style={{ gridArea: 'bk' }}>City Watch</Info>
      <GenTitle style={{ gridArea: 'rt' }}>Race:</GenTitle>
      <Info style={{ gridArea: 'rl' }}>Tabaxi</Info>
      <GenTitle style={{ gridArea: 'lt' }}>Level:</GenTitle>
      <Info style={{ gridArea: 'lv' }}>5</Info>
      <GenTitle style={{ gridArea: 'at' }}>Alignment:</GenTitle>
      <Info style={{ gridArea: 'ag' }}>Chaotic Good</Info>
      <GenTitle style={{ gridArea: 'et' }}>Experience:</GenTitle>
      <Info style={{ gridArea: 'ex' }}>6500</Info>
    </GenGrid>
    <CharacterImg src={Aisha} alt="Images of Aisha Clan-Clan." />
  </Grid>
);

export default Character;
