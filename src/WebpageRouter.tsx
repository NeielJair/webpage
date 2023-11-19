import { HashRouter, Route, Routes } from 'react-router-dom';
import Maxi from './pages/Maxi/Maxi';
import App from './pages/App/App';
import Homepage from './pages/Homepage/Homepage';

export default function WebpageRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/maxi" element={<Maxi />} />
        <Route path="/example" element={<App />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<p>I can't find it (404)</p>} />
      </Routes>
    </HashRouter>
  );
}
