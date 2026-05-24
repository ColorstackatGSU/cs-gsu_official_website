import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Involvement from './pages/Involvement';
import Students from './pages/Students';
import Sponsors from './pages/Sponsors';
import BecomeAMember from './pages/BecomeAMember';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="involvement" element={<Involvement />} />
        <Route path="students" element={<Students />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="become-a-member" element={<BecomeAMember />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
