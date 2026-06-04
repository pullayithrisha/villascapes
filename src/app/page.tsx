import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import AboutProject from '@/components/sections/AboutProject';
import VillaConfigurations from '@/components/sections/VillaConfigurations';
import AmenitiesHighlights from '@/components/sections/AmenitiesHighlights';
import LocationAdvantages from '@/components/sections/LocationAdvantages';
import DeveloperLegacy from '@/components/sections/DeveloperLegacy';
import GalleryPreview from '@/components/sections/GalleryPreview';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutProject />
      <AmenitiesHighlights />
      <GalleryPreview />
      <VillaConfigurations />
      <LocationAdvantages />
      <DeveloperLegacy />
      <Testimonials />
    </>
  );
}
