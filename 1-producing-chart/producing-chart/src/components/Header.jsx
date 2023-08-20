import styled from 'styled-components';

const HEADER_HEIGHT = 150;

const Header = () => {
  return <HeaderBox>Game Score Chart</HeaderBox>;
};

const HeaderBox = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  text-align: center;
  line-height: ${HEADER_HEIGHT}px;
  font-size: 60px;
  border: 1px solid black;
  border-radius: 20px;
`;

export default Header;
