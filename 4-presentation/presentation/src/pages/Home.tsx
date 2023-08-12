import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

interface IHomeProps {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const Home = ({ setImages }: IHomeProps) => {
  const navigate = useNavigate();

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
        navigate('/main');
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <HomeBox>
      <Title>4th challenge - Presentation</Title>
      <Button htmlFor="image-upload">Add pictures</Button>
      <ImageInput
        id="image-upload"
        type="file"
        accept="image/png, image/jpeg"
        multiple
        onChange={handleImageChange}
      />
    </HomeBox>
  );
};

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const ImageInput = styled.input`
  display: none;
`;

const Button = styled.label`
  width: 200px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  font-size: 20px;
  background-color: #35a555;
  border-radius: 20px;
  border: 2px solid black;
  cursor: pointer;
`;

export default Home;
