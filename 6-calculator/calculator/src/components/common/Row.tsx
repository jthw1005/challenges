import { ReactElement } from 'react';
import { styled } from 'styled-components';

type FlexProperty = 'start' | 'center' | 'end';

interface RowProps {
  children: ReactElement | ReactElement[];
  justifyCenter?: FlexProperty;
  alignItems?: FlexProperty;
}

const Row = (props: RowProps) => {
  const { children, justifyCenter = 'center', alignItems = 'center' } = props;
  return (
    <RowBox justifyCenter={justifyCenter} alignItems={alignItems}>
      {children}
    </RowBox>
  );
};

const RowBox = styled.div<{
  justifyCenter: FlexProperty;
  alignItems: FlexProperty;
}>`
  display: flex;
  justify-content: ${({ justifyCenter }) => justifyCenter};
  align-items: ${({ alignItems }) => alignItems};
`;

export default Row;
