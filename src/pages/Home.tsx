import Hero from '../components/Hero';
import SponsorStrip from '../components/SponsorStrip';
import MissionBlurb from '../components/MissionBlurb';
import FeatureColumns from '../components/FeatureColumns';
import StatsGrid from '../components/StatsGrid';
import Testimonials from '../components/Testimonials';
import GetInvolved from '../components/GetInvolved';

export default function Home() {
  return (
    <>
      <Hero />
      <SponsorStrip />
      <MissionBlurb />
      <FeatureColumns />
      <StatsGrid />
      <Testimonials />
      <GetInvolved />
    </>
  );
}
