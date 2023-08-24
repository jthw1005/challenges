import { styled } from 'styled-components';

interface TextProps {
  content: string;
  fontSize?: number;
  color?: string;
}

const Text = (props: TextProps) => {
  const { content, fontSize = 12, color = '#111' } = props;
  return (
    <TextContent fontSize={fontSize} color={color}>
      {content}
    </TextContent>
  );
};

const TextContent = styled.span<{ fontSize: number; color: string }>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ color }) => color};
`;

export default Text;
