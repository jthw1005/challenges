import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <LayoutBox>{children}</LayoutBox>;
};

const LayoutBox = styled.div`
  width: 800px;
  margin: 150px auto;
`;

export default Layout;
