import Hero from './Hero';
import SponsorStrip from './SponsorStrip';
import EditorialIntro from './EditorialIntro';
import ProcessGrid from './ProcessGrid';
import SplitImpactBanner from './SplitImpactBanner';
import StatsSection from './StatsSection';
import PartnerBand from './PartnerBand';
import Testimonials from './Testimonials';
import VisualFooterBanner from './VisualFooterBanner';
import GetInvolved from '../../components/GetInvolved';

export default function Home() {
  return (
    <>
      <Hero />
      <SponsorStrip />
      <EditorialIntro />
      <ProcessGrid />
      <SplitImpactBanner />
      <StatsSection />
      <PartnerBand />
      <Testimonials />
      <VisualFooterBanner />
      <GetInvolved />
    </>
  );
}
