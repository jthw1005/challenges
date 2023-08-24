import { ReactElement } from 'react';
import { styled } from 'styled-components';

export type FlexProperty = 'start' | 'center' | 'end' | 'space-between';

interface RowProps {
  children: ReactElement | ReactElement[];
  justifyCenter?: FlexProperty;
  alignItems?: FlexProperty;
  gap?: number;
}

const Row = (props: RowProps) => {
  const {
    children,
    justifyCenter = 'center',
    alignItems = 'center',
    gap = 0,
  } = props;
  return (
    <RowBox justifyCenter={justifyCenter} alignItems={alignItems} gap={gap}>
      {children}
    </RowBox>
  );
};

const RowBox = styled.div<{
  justifyCenter: FlexProperty;
  alignItems: FlexProperty;
  gap: number;
}>`
  display: flex;
  justify-content: ${({ justifyCenter }) => justifyCenter};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap}px;
`;

export default Row;
