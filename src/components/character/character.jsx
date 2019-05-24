import React from 'react';
import Grid, {
  Name,
  CharacterImg,
  GenGrid,
  GenTitle,
  Info,
  StatGrid,
  StatHeader,
  SkillGrid,
  Block,
  Stat,
  Mod,
  SkillMod,
  SkillName,
  NullSpace,
  Pro,
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
    <StatGrid>
      <StatHeader style={{ gridArea: 'stat' }}>Stats</StatHeader>
      <StatHeader style={{ gridArea: 'skill' }}>Proficiency</StatHeader>
      <StatHeader style={{ gridArea: 'sname' }}>Skills</StatHeader>
      <SkillGrid style={{ gridArea: 'str' }}>
        <Block style={{ gridArea: 'stat' }}>
          <Stat>
            STR: <br />
            18
          </Stat>
        </Block>
        <Block style={{ gridArea: 'mod' }}>
          <Mod>+4</Mod>
        </Block>
        <Block style={{ gridArea: 'pro1' }}>
          <Pro>
            <circle
              cx="15"
              cy="15"
              r="12"
              stroke="#5c3854"
              stroke-width="3"
              fill="green"
            />
          </Pro>
        </Block>
        <Block style={{ gridArea: 'sm1' }}>
          <SkillMod>+7</SkillMod>
        </Block>
        <Block style={{ gridArea: 'name1' }}>
          <SkillName>Saving Throw</SkillName>
        </Block>
        <Block style={{ gridArea: 'pro2' }}>
          <Pro>
            <circle
              cx="15"
              cy="15"
              r="12"
              stroke="#5c3854"
              stroke-width="3"
              fill="#f6e6cc"
            />
          </Pro>
        </Block>
        <Block style={{ gridArea: 'sm2' }}>
          <SkillMod>+4</SkillMod>
        </Block>
        <Block style={{ gridArea: 'na/>me2' }}>
          <SkillName>Athletics</SkillName>
        </Block>
        <Block style={{ gridArea: 'pro3' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'sm3' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'name3' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'pro4' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'sm4' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'name4' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'pro5' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'sm5' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'name5' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'pro6' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'sm6' }}>
          <NullSpace>---</NullSpace>
        </Block>
        <Block style={{ gridArea: 'name6' }}>
          <NullSpace>---</NullSpace>
        </Block>
      </SkillGrid>
      <SkillGrid style={{ gridArea: 'dex' }}>
        <Block style={{ gridArea: 'stat' }}>
          <Stat>
            DEX: <br />
            18
          </Stat>
        </Block>
        <Block style={{ gridArea: 'mod' }}>
          <Mod>+4</Mod>
        </Block>
        <Block style={{ gridArea: 'pro1' }} />
        <Block style={{ gridArea: 'sm1' }} />
        <Block style={{ gridArea: 'name1' }} />
        <Block style={{ gridArea: 'pro2' }} />
        <Block style={{ gridArea: 'sm2' }} />
        <Block style={{ gridArea: 'name2' }} />
        <Block style={{ gridArea: 'pro3' }} />
        <Block style={{ gridArea: 'sm3' }} />
        <Block style={{ gridArea: 'name3' }} />
        <Block style={{ gridArea: 'pro4' }} />
        <Block style={{ gridArea: 'sm4' }} />
        <Block style={{ gridArea: 'name4' }} />
        <Block style={{ gridArea: 'pro5' }} />
        <Block style={{ gridArea: 'sm5' }} />
        <Block style={{ gridArea: 'name5' }} />
        <Block style={{ gridArea: 'pro6' }} />
        <Block style={{ gridArea: 'sm6' }} />
        <Block style={{ gridArea: 'name6' }} />
      </SkillGrid>
      <SkillGrid style={{ gridArea: 'con' }}>
        <Block style={{ gridArea: 'stat' }}>
          <Stat>
            CON: <br />
            16
          </Stat>
        </Block>
        <Block style={{ gridArea: 'mod' }}>
          <Mod>+3</Mod>
        </Block>
      </SkillGrid>
      <SkillGrid style={{ gridArea: 'int' }}>
        <Block style={{ gridArea: 'stat' }}>
          <Stat>
            INT: <br />
            11
          </Stat>
        </Block>
        <Block style={{ gridArea: 'mod' }}>
          <Mod>0</Mod>
        </Block>
      </SkillGrid>
      <SkillGrid style={{ gridArea: 'wis' }}>
        <Block style={{ gridArea: 'stat' }}>
          <Stat>
            WIS: <br />
            11
          </Stat>
        </Block>
        <Block style={{ gridArea: 'mod' }}>
          <Mod>0</Mod>
        </Block>
      </SkillGrid>
      <SkillGrid style={{ gridArea: 'chr' }}>
        <Block style={{ gridArea: 'stat' }}>
          <Stat>
            CHA: <br />
            14
          </Stat>
        </Block>
        <Block style={{ gridArea: 'mod' }}>
          <Mod>+2</Mod>
        </Block>
      </SkillGrid>
    </StatGrid>
  </Grid>
);

export default Character;
