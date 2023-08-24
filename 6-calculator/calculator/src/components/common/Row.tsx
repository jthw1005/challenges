import { ReactElement } from 'react';
import { styled } from 'styled-components';

export type FlexProperty = 'start' | 'center' | 'end' | 'space-between';

interface RowProps {
  children: ReactElement | ReactElement[];
  justifyCenter?: FlexProperty;
  alignItems?: FlexProperty;
  gap?: number;
  className?: string;
}

const Row = (props: RowProps) => {
  const {
    children,
    justifyCenter = 'center',
    alignItems = 'center',
    gap = 0,
    className,
  } = props;
  return (
    <RowBox
      justifyCenter={justifyCenter}
      alignItems={alignItems}
      gap={gap}
      className={className}
    >
      {children}
    </RowBox>
  );
};

const RowBox = styled.div<{
  justifyCenter: FlexProperty;
  alignItems: FlexProperty;
  gap: number;
  className?: string;
}>`
  display: flex;
  justify-content: ${({ justifyCenter }) => justifyCenter};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap}px;
`;

export default Row;
