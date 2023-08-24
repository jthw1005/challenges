import { ReactElement } from 'react';
import { styled } from 'styled-components';

type FlexProperty = 'start' | 'center' | 'end';

interface ColProps {
  children: ReactElement | ReactElement[];
  justifyCenter?: FlexProperty;
  alignItems?: FlexProperty;
}

const Col = (props: ColProps) => {
  const { children, justifyCenter = 'center', alignItems = 'center' } = props;
  return (
    <ColBox justifyCenter={justifyCenter} alignItems={alignItems}>
      {children}
    </ColBox>
  );
};

const ColBox = styled.div<{
  justifyCenter: FlexProperty;
  alignItems: FlexProperty;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyCenter }) => justifyCenter};
  align-items: ${({ alignItems }) => alignItems};
`;

export default Col;
