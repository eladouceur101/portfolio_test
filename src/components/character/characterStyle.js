import styled from 'styled-components';
import Scroll from '../../images/banner-svg-scroll.png';

const characterSheetGrid = styled.div`
  display: grid;
  grid-template-areas:
    'name name img'
    'gen gen img'
    'ss 42 43'
    'ss 52 53'
    'ss 62 63'
    'ss 72 73'
    'ss 82 83'
    'ss 92 93'
    'ss 102 103'
    '111 112 113'
    '121 122 123'
    '131 132 133'
    '141 142 143'
    '151 152 153'
    '161 162 163'
    '171 172 173';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:
    0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
    1fr 1fr 1fr 1fr;
  background: #f6e6cc;
  border-style: solid;
  border-color: #0f4737;
  border-width: 2px;
  border-radius: 20px;
  margin: 2%;
  padding: 1%;
`;

export const Name = styled.h1`
  grid-area: name;
  color: #0f4737;
  justify-self: center;
  border: 20px solid;
  border-image: url(${Scroll});
  border-image-slice: 250;
  height: 50px;
  width: 285px;
  padding-right: 1%;
  padding-left: 1%;
  margin: 0%;
`;

export const GenGrid = styled.div`
  grid-area: gen;
  display: grid;
  grid-template-areas:
    'ct cl bt bk rt rl'
    'lt lv at ag et ex';
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  border-style: solid;
  border-color: #0f4737;
  border-width: 2px;
  border-radius: 10px;
  margin: 1%;
`;

export const GenTitle = styled.h2`
  color: #0f4737;
  text-decoration: underline;
  text-decoration-color: #0f4737;
  justify-self: center;
  align-self: center;
`;

export const Info = styled.h3`
  justify-self: center;
  align-self: center;
`;

export const CharacterImg = styled.img`
  grid-area: img;
  justify-self: center;
  width: 90%;
  border-style: solid;
  border-color: #0f4737;
  border-width: 2px;
  border-radius: 10px;
  margin: 1vh;
  padding: 1vh;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-area: ss;
  grid-template-areas:
    'stat skill sname'
    'str str str'
    'dex dex dex'
    'con con con'
    'int int int'
    'wis wis wis'
    'chr chr chr';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.3fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border-style: solid;
  border-color: #0f4737;
  border-width: 2px;
  border-radius: 10px;
  margin: 1%;
`;

export const StatHeader = styled.h2`
  color: #0f4737;
  text-decoration: underline;
  text-decoration-color: #0f4737;
  justify-self: center;
  border-style: solid;
  border-color: #0f4737;
  border-width: 2px;
  width: 100%;
  height: 100%;
  align-self: center;
  text-align: center;
`;

export const SkillGrid = styled.div`
  display: grid;
  grid-template-areas:
    'stat pro1 sm1 name1'
    'stat pro2 sm2 name2'
    'stat pro3 sm3 name3'
    'stat pro4 sm4 name4'
    'mod pro5 sm5 name5'
    'mod pro6 sm6 name6';
  grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  border-style: solid;
  border-color: #0f4737;
  border-width: 2px;
`;

export const Block = styled.div`
  color: #5c3854;
  border-style: solid;
  border-color: #0f4737;
  border-width: 2px;
`;

export const Stat = styled.h1`
  color: #5c3854;
  justify-content: center;
  align-self: center;
  text-align: center;
  height: 50%;
  margin-top: 25%;
  margin-bottom: 25%;
`;

export const Mod = styled.h2`
  color: #5c3854;
  justify-content: center;
  align-self: center;
  text-align: center;
`;

export const SkillMod = styled.h4`
  color: #5c3854;
  justify-content: center;
  align-self: center;
  text-align: center;
  height: 80%;
  margin-top: 10%;
  margin-bottom: 10%;
`;

export const SkillName = styled.p`
  color: #5c3854;
  text-align: center;
  margin: 0;
`;

export const NullSpace = styled.p`
  color: #050505;
  text-align: center;
  margin: 0;
`;

export const Pro = styled.svg`
  height: 15%;
  width: 15%;
  position: absolute;
`;

export default characterSheetGrid;
