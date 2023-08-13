import { useState } from 'react';
import Layout from './components/Layout';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';

const App = () => {
  const [images, setImages] = useState<string[]>([]);

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setImages={setImages} />} />
          <Route
            path="main"
            element={<Main images={images} setImages={setImages} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
