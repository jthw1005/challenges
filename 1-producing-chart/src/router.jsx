import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Chart from './pages/Chart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="chart" element={<Chart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
