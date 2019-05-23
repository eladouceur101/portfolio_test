import React from 'react';
import Grid, {
  Name,
  CharacterImg,
  GenGrid,
  GenTitle,
  Class,
  Background,
  Race,
  Level,
  Alignment,
  Exp,
} from './characterStyle';
import Aisha from '../../images/aisha.jpg';

const Character = () => (
  <Grid>
    <Name>Aisha Clan-Clan</Name>
    <GenGrid>
      <GenTitle>Class:</GenTitle>
      <Class>Zealot Barbarian</Class>
      <GenTitle>Background:</GenTitle>
      <Background>City Watch</Background>
      <GenTitle>Race:</GenTitle>
      <Race>Tabaxi</Race>
      <GenTitle>Level:</GenTitle>
      <Level>5</Level>
      <GenTitle>Alignment:</GenTitle>
      <Alignment>Chaotic Good</Alignment>
      <GenTitle>Experience:</GenTitle>
      <Exp>6500</Exp>
    </GenGrid>
    <CharacterImg src={Aisha} alt="Images of Aisha Clan-Clan." />
  </Grid>
);

export default Character;
