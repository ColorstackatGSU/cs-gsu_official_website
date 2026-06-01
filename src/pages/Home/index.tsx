import Hero from './Hero';
import SponsorStrip from './SponsorStrip';
import MissionBlurb from './MissionBlurb';
import FeatureColumns from './FeatureColumns';
import Testimonials from './Testimonials';
import GetInvolved from '../../components/GetInvolved';

export default function Home() {
  return (
    <>
      <Hero />
      <SponsorStrip />
      <MissionBlurb />
      <FeatureColumns />
      <Testimonials />
      <GetInvolved />
    </>
  );
}
