import { styled } from 'styled-components';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <LayoutBox>{children}</LayoutBox>;
};

const LayoutBox = styled.div`
  width: 700px;
  margin: 200px auto;
`;

export default Layout;
