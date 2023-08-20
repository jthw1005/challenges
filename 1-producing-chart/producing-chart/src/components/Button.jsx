import { styled } from 'styled-components';

const Button = ({ text, fontSize, width, height, type, onClick }) => {
  return (
    <StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      type={type}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export default Button;
