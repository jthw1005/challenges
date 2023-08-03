import { styled } from 'styled-components';

interface IAMPMIndicator {
  hour: string;
}

const AMPMIndicator = ({ hour }: IAMPMIndicator) => {
  const currIndicator = +hour >= 12 ? 'PM' : 'AM';

  return <AMPMIndicatorBox>{currIndicator}</AMPMIndicatorBox>;
};

const AMPMIndicatorBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 20px 20px 0;
  font-size: 40px;
`;

export default AMPMIndicator;
