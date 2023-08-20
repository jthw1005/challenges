import Header from './components/Header';
import Layout from './components/Layout';
import Spacing from './components/Spacing';
import Router from './router';

function App() {
  return (
    <Layout>
      <Header />
      <Spacing height="30" />
      <Router />
    </Layout>
  );
}

export default App;
