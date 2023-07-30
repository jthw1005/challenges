import { useRecoilValue } from 'recoil';
import { ScoreData } from '../recoil/scoreData';

const Chart = () => {
  const scoreData = useRecoilValue(ScoreData);

  return <div>chart</div>;
};

export default Chart;
