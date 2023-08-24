import { ReactElement } from 'react';
import { styled } from 'styled-components';
import { FlexProperty } from './Row';

interface ColProps {
  children: ReactElement | ReactElement[];
  justifyCenter?: FlexProperty;
  alignItems?: FlexProperty;
  gap?: number;
}

const Col = (props: ColProps) => {
  const {
    children,
    justifyCenter = 'center',
    alignItems = 'center',
    gap = 0,
  } = props;
  return (
    <ColBox justifyCenter={justifyCenter} alignItems={alignItems} gap={gap}>
      {children}
    </ColBox>
  );
};

const ColBox = styled.div<{
  justifyCenter: FlexProperty;
  alignItems: FlexProperty;
  gap: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyCenter }) => justifyCenter};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap}px;
`;

export default Col;
