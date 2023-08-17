import { css, styled } from 'styled-components';
import AddImageBtn from '../components/AddImageBtn';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IMainProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const MAIN_IMAGE_WIDTH = 550;
const MAIN_IMAGE_HEIGHT = 360;
const DEFAULT_IMAGE_IDX = 0;
const SUB_CAROUSEL_SIZE = 5;

const Main = ({ images, setImages }: IMainProps) => {
  const navigate = useNavigate();

  const [startIdx, setStartIdx] = useState<number>(DEFAULT_IMAGE_IDX);
  const [endIdx, setEndIdx] = useState<number>(
    DEFAULT_IMAGE_IDX + SUB_CAROUSEL_SIZE - 1
  );
  const [currIdx, setCurrIdx] = useState<number>(DEFAULT_IMAGE_IDX);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    setEndIdx(Math.min(images.length - 1, startIdx + SUB_CAROUSEL_SIZE - 1));
  }, [images]);

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

  const handleSubCarouselImgMouseEnter = (index: number) => () => {
    setHoveredIdx(index);
  };

  const handleSubCarouselImgMouseLeave = () => {
    setHoveredIdx(null);
  };

  const handleDeleteBtnClick = (index: number) => () => {
    setImages((prevImages) => {
      return [...prevImages].filter((_, idx) => {
        return idx !== index;
      });
    });

    if (images.length === 1) {
      navigate('/');
      return;
    }

    if (endIdx === images.length - 1 && startIdx !== 0) {
      setStartIdx((prev) => prev - 1);
      setEndIdx((prev) => prev - 1);
    }

    if (currIdx === images.length - 1) {
      setCurrIdx((prev) => prev - 1);
    }
  };

  const mainList = images.slice(startIdx, endIdx + 1).map((image, index) => {
    const originIdx = startIdx + index;
    return (
      <SubCarouselBtn
        onMouseEnter={handleSubCarouselImgMouseEnter(originIdx)}
        onMouseLeave={handleSubCarouselImgMouseLeave}
      >
        <SubCarouselImage
          key={index}
          src={image}
          isSelected={originIdx === currIdx}
          onClick={handleSubImageClick(originIdx)}
        />
        <SubCaroueselDeleteBtn
          isHover={originIdx === hoveredIdx}
          onClick={handleDeleteBtnClick(originIdx)}
        >
          ❌
        </SubCaroueselDeleteBtn>
      </SubCarouselBtn>
    );
  });

  const imageNum = `${images.length === 0 ? 0 : currIdx + 1}/${images.length}`;

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
      <AddImageBtn setImages={setImages} size="small" />
      <ul>{mainList}</ul>
      <div>{imageNum}</div>
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 650px;
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
`;

const MainCarouselImage = styled.img`
  min-width: ${MAIN_IMAGE_WIDTH}px;
  max-height: ${MAIN_IMAGE_HEIGHT}px;
  height: auto;
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

const SubCarouselBtn = styled.button`
  position: relative;
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

const SubCaroueselDeleteBtn = styled.button<{ isHover: boolean }>`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: lightgray;
  border: 1px solid black;
  border-radius: 50%;
  ${({ isHover }) => {
    if (isHover) {
      return css`
        display: block;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
`;

export default Main;
