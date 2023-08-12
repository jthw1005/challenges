import { css, styled } from 'styled-components';

interface IMainProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  currIdx: number;
  setCurrIdx: React.Dispatch<React.SetStateAction<number>>;
  startIdx: number;
  setStartIdx: React.Dispatch<React.SetStateAction<number>>;
  endIdx: number;
  setEndIdx: React.Dispatch<React.SetStateAction<number>>;
}

const MAIN_IMAGE_WIDTH = 550;
const MAIN_IMAGE_HEIGHT = 360;

const Main = ({
  images,
  setImages,
  currIdx,
  setCurrIdx,
  startIdx,
  setStartIdx,
  endIdx,
  setEndIdx,
}: IMainProps) => {
  const handlePrevBtnClick = () => {
    if (currIdx <= 0) {
      return;
    }
    setCurrIdx(currIdx - 1);
    if (currIdx === startIdx) {
      setStartIdx((prev) => prev - 1);
      setEndIdx((prev) => prev - 1);
    }
  };

  const handleNextBtnClick = () => {
    if (currIdx >= images.length - 1) {
      return;
    }
    setCurrIdx(currIdx + 1);
    if (currIdx === endIdx) {
      setStartIdx((prev) => prev + 1);
      setEndIdx((prev) => prev + 1);
    }
  };

  const handleSubImageClick = (index: number) => () => {
    setCurrIdx(index);
  };

  const mainList = images.slice(startIdx, endIdx + 1).map((image, index) => (
    <SubCarouselBtn>
      <SubCarouselImage
        key={index}
        src={image}
        onClick={handleSubImageClick(startIdx + index)}
        isSelected={index + startIdx === currIdx}
      />
    </SubCarouselBtn>
  ));

  return (
    <MainPageLayout>
      <MainCarouselBox>
        <PrevButton onClick={handlePrevBtnClick}>⬅️</PrevButton>
        <MainCarouselFrame>
          <MainCarouselImageWrapper translateX={-currIdx * MAIN_IMAGE_WIDTH}>
            {images.map((image, index) => (
              <MainCarouselImage key={index} src={image} />
            ))}
          </MainCarouselImageWrapper>
        </MainCarouselFrame>
        <NextButton onClick={handleNextBtnClick}>➡️</NextButton>
      </MainCarouselBox>

      <SubCarouselBox>{mainList}</SubCarouselBox>
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 40px;
  border: 3px solid black;
  border-radius: 20px;
`;

const MainCarouselBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: ${MAIN_IMAGE_WIDTH}px;
`;

const MainCarouselFrame = styled.div`
  width: ${MAIN_IMAGE_WIDTH}px;
  height: ${MAIN_IMAGE_HEIGHT}px;
  overflow: hidden;
`;

const MainCarouselImageWrapper = styled.div<{ translateX: number }>`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${(props) => props.translateX}px);
  width: ${MAIN_IMAGE_WIDTH}px;
`;

const MainCarouselImage = styled.img`
  width: ${MAIN_IMAGE_WIDTH}px;
  object-fit: cover;
`;

const MainCarouselBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: lightgray;
`;

const PrevButton = styled(MainCarouselBtn)`
  left: -40px;
`;

const NextButton = styled(MainCarouselBtn)`
  right: -40px;
`;

const SubCarouselBox = styled.ul``;

const SubCarouselBtn = styled.button`
  margin: 0 10px;
`;

const SubCarouselImage = styled.img<{ isSelected: boolean }>`
  width: 100px;
  height: 100px;
  object-fit: cover;
  ${({ isSelected }) => {
    if (isSelected) {
      return css`
        box-shadow: 0px 0px 10px blue;
      `;
    }
  }}
`;

export default Main;
