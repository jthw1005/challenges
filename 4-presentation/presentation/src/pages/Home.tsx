import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import AddImageBtn from '../components/AddImageBtn';

interface IHomeProps {
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const Home = ({ setImages }: IHomeProps) => {
  const navigate = useNavigate();
  const onSuccessCallback = () => {
    navigate('/main');
  };

  return (
    <HomeBox>
      <Title>4th challenge - Presentation</Title>
      <AddImageBtn
        setImages={setImages}
        size="big"
        onSuccessCallback={onSuccessCallback}
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

export default Home;
