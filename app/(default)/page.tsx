export const metadata = {
  title: "AutoPost - Appfusion",
  description: "Công cụ giúp tạo bài viết và lên bài tự động, giảm 90% công sức xây dựng website",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import PricingTab from "@/components/price";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      {/* <Testimonials /> */}
      <PricingTab yearly={false} planName={""} price={{
        monthly: 100000,
        yearly: 800000,
      }} planDescription={""} features={[]}/>
      <Cta />
    </>
  );
}
