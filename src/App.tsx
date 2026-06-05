import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Involvement from './pages/Involvement';
import Students from './pages/Students';
import Sponsors from './pages/Sponsors';
import ApplyLanding from './pages/Apply';
import ApplyMember from './pages/Apply/Member';
import ApplyEBoard from './pages/Apply/EBoard';
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
        <Route path="apply" element={<ApplyLanding />} />
        <Route path="apply/member" element={<ApplyMember />} />
        <Route path="apply/e-board" element={<ApplyEBoard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
