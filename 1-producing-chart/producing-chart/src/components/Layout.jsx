import { styled } from 'styled-components';

const Layout = ({ children }) => {
  return <LayoutBox>{children}</LayoutBox>;
};

const LayoutBox = styled.div`
  width: 600px;
  margin: 80px auto;
`;

export default Layout;
