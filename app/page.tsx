import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import PromisesGrid from "@/components/sections/PromisesGrid";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import MidPageCTA from "@/components/sections/MidPageCTA";
import Testimonials from "@/components/sections/Testimonials";
import ServiceArea from "@/components/sections/ServiceArea";
import FinalCTA from "@/components/sections/FinalCTA";
import { BUSINESS } from "@/lib/business";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BUSINESS.name,
            description:
              "Same-day whole-home water filtration in Orlando and Central Florida. Up to 10-year warranty, $0 down financing, free 5-test water analysis.",
            telephone: BUSINESS.phone,
            email: BUSINESS.email,
            url: "https://crystal-spring-water-co.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: BUSINESS.city,
              addressRegion: BUSINESS.region,
              addressCountry: "US",
            },
            areaServed: BUSINESS.cities,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: BUSINESS.rating,
              reviewCount: BUSINESS.reviewCount,
            },
          }),
        }}
      />

      <Hero />
      <MarqueeStrip />
      <PromisesGrid />
      <ServicesGrid />
      <HowItWorks />
      <MidPageCTA />
      <Testimonials />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
