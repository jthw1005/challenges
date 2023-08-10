import { styled } from 'styled-components';

const Home = () => {
  const handleButtonClick = () => {
    console.log('clicked');
  };

  return (
    <HomeBox>
      <Title>4th challenge - Presentation</Title>
      <Button onClick={handleButtonClick}>Add pictures</Button>
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

const Button = styled.button`
  width: 200px;
  height: 150px;
  font-size: 20px;
  background-color: skyblue;
  border-radius: 20px;
  cursor: pointer;
`;

export default Home;
