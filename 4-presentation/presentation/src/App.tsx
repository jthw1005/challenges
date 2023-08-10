import { useState } from 'react';
import Layout from './components/Layout';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

const INIT_VALUE = 0;
const LIST_SIZE = 5;

const App = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currIdx, setCurrIdx] = useState<number>(INIT_VALUE);
  const [startIdx, setStartIdx] = useState<number>(INIT_VALUE);
  const [endIdx, setEndIdx] = useState<number>(INIT_VALUE + LIST_SIZE);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setImages={setImages} />} />
          <Route path="main" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
