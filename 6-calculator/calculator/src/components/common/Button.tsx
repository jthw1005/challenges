import { styled } from 'styled-components';

type ButtonSize = 'normal' | 'large';
export type ColorCode = string;

interface ButtonProps {
  text: string;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  backgroundColor?: ColorCode;
}

const Button = (props: ButtonProps) => {
  const {
    text,
    size = 'normal',
    disabled,
    onClick,
    backgroundColor = '#888',
  } = props;
  return (
    <ButtonBox
      size={size}
      disabled={disabled}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      {text}
    </ButtonBox>
  );
};

const ButtonBox = styled.button<{ size: ButtonSize; backgroundColor: string }>`
  width: ${({ size }) => (size === 'normal' ? '50px' : '100px')};
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #fff;
  border: 0.5px solid #555;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default Button;
