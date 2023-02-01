import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';

import Layout from './components/UI/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  document.body.style.backgroundColor = '#ffffff';

  return (
    <Routes>
      <Route path="happy/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
