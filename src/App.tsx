import { Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Involvement from './pages/Involvement';
import Students from './pages/Students';
import Sponsors from './pages/Sponsors';
import Spiels from './pages/Spiels';
import ApplyLanding from './pages/Apply';
import ApplyMember from './pages/Apply/Member';
import ApplyEBoard from './pages/Apply/EBoard';
import Jeopardy, { Jeopardy2 } from './pages/Jeopardy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <MotionConfig reducedMotion="always">
      <Routes>
        <Route path="jeopardy" element={<Jeopardy />} />
        <Route path="jeopardy2" element={<Jeopardy2 />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="involvement" element={<Involvement />} />
          <Route path="students" element={<Students />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="spiels" element={<Spiels />} />
          {/* singular link works too */}
          <Route path="spiel" element={<Spiels />} />
          <Route path="apply" element={<ApplyLanding />} />
          <Route path="apply/member" element={<ApplyMember />} />
          <Route path="apply/e-board" element={<ApplyEBoard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </MotionConfig>
  );
}
