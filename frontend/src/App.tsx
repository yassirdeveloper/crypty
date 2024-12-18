
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Icon from './components/Icon';

import logoSVG from './assets/logo.svg';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={ queryClient }>
      <Router>
      <Header logo={<Icon src={logoSVG} alt='Logo' />} links={[{label: 'link1', path: '/path1'}]}/>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
};

export default App
