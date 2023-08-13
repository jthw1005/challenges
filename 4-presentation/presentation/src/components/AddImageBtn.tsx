import { ChangeEvent } from 'react';
import { css, styled } from 'styled-components';

type TSize = 'small' | 'big';

interface IAddImageBtnProps {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  size: TSize;
  onSuccessCallback?: () => void;
}

const AddImageBtn = ({
  setImages,
  size,
  onSuccessCallback,
}: IAddImageBtnProps) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) {
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages: string[]) => [
          ...prevImages,
          reader.result as string,
        ]);
        if (onSuccessCallback) {
          onSuccessCallback();
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <>
      <Button htmlFor="image-upload" size={size}>
        Add pictures
      </Button>
      <ImageInput
        id="image-upload"
        type="file"
        accept="image/png, image/jpeg"
        multiple
        onChange={handleImageChange}
      />
    </>
  );
};

const ImageInput = styled.input`
  display: none;
`;

const Button = styled.label<{ size: TSize }>`
  ${({ size }) => {
    if (size === 'big') {
      return css`
        width: 150px;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
      `;
    } else {
      return css`
        width: 120px;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
      `;
    }
  }}
  text-align: center;
  background-color: #35a555;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
`;

export default AddImageBtn;
