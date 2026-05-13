"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Building } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="medium"
        background="circleGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Projects",
          id: "products",
        },
        {
          name: "Team",
          id: "team",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SKETSA SELARAS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="SKETSA SELARAS"
      description="Menciptakan harmoni antara visi arsitektur dan estetika interior hunian anda.
"
      buttons={[
        {
          text: "Explore Showroom",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778638896868-ve5ttcfn.jpg"
      imageAlt="modern showroom interior design"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Our Studio"
      title="Design Philosophy"
      description="At Sketsa Selaras, we believe architecture isn't just about structures; it's about the life within them."
      subdescription="Our showroom curates exceptional pieces that bridge the gap between structural integrity and personal expression."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778639240408-hzup7g15.jpg"
      mediaAnimation="blur-reveal"
      icon={Building}
      imageAlt="interior architect studio"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Arsitektur",
          description: "Defining the flow and function of your luxury spaces.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778641452618-e8m0pxlw.jpg",
          imageAlt: "marble texture background",
        },
        {
          title: "Custom Interiors",
          description: "Tailored pieces to match your vision perfectly.",
          imageSrc: "http://img.b2bpic.net/free-photo/elegance-luxury-modern-domestic-kitchen-generated-by-ai_188544-27840.jpg?_wi=1",
          imageAlt: "wood furniture detail",
        },
        {
          title: "Lighting & Ambience",
          description: "Expert curation of mood and light environments.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778641062830-a93vxnb9.png",
          imageAlt: "modern interior lighting",
        },
      ]}
      title="Architectural Excellence"
      description="We specialize in high-end spatial design and custom interior curation."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Resort Hotel Sabda Alam - Garut",
          price: "IDR 4.5M",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778638773219-xhyrzz7d.jpg",
          imageAlt: "designer wood chair",
        },
        {
          id: "p2",
          name: "SMKN 10 GARUT",
          price: "IDR 12M",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778638638793-rlsw3eax.jpg",
          imageAlt: "luxury leather sofa",
        },
        {
          id: "p3",
          name: " PT.AGRO",
          price: "IDR 2.1M",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778638516476-uejkua3b.jpg",
          imageAlt: "minimalist coffee table",
        },
        {
          id: "p4",
          name: "SABDA ALAM RESORT",
          price: "IDR 1.8M",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778641520502-gfmike09.png",
          imageAlt: "modern lamp design",
        },
        {
          id: "p5",
          name: "MR.H.AMUD",
          price: "IDR 5.5M",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778640683835-jd7oll8j.png",
          imageAlt: "designer shelving unit",
        },
        {
          id: "p6",
          name: "MR.RENDRA",
          price: "IDR 850K",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DeKQbmaCfXvLQQdM5NaxEIuI0Z/uploaded-1778640311322-jshs84xd.jpg",
          imageAlt: "designer home decor",
        },
      ]}
      title="Showroom Collection"
      description="Discover curated pieces designed for sophisticated living."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "150+",
          title: "Projects Completed",
          items: [
            "Residential",
            "Commercial",
            "Showrooms",
          ],
        },
        {
          id: "m2",
          value: "8+",
          title: "Design Awards",
          items: [
            "National",
            "Regional",
            "International",
          ],
        },
        {
          id: "m3",
          value: "12",
          title: "Years of Excellence",
          items: [
            "Experience",
            "Legacy",
            "Trust",
          ],
        },
      ]}
      title="Design Impact"
      description="Our legacy is built on precision and consistent quality."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "t1",
          name: "Aria Pratama",
          role: "Principal Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/very-important-project-must-be-done_329181-10311.jpg",
          imageAlt: "architect portrait studio",
        },
        {
          id: "t2",
          name: "Budi Santoso",
          role: "Creative Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-with-blue-shirt-schematics_23-2148269824.jpg",
          imageAlt: "interior architect portrait",
        },
        {
          id: "t3",
          name: "Clara Wijaya",
          role: "Showroom Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-working_23-2149721891.jpg",
          imageAlt: "furniture designer portrait",
        },
      ]}
      title="Our Design Visionaries"
      description="Meet the minds behind every architectural masterwork."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah",
          date: "2023",
          title: "Homeowner",
          quote: "Stunning vision realized perfectly.",
          tag: "Design",
          avatarSrc: "http://img.b2bpic.net/free-photo/modern-living-room-interior-design_23-2150794700.jpg",
          avatarAlt: "happy home owner portrait",
          imageSrc: "http://img.b2bpic.net/free-photo/view-modern-futuristic-work-space-with-furniture_23-2151797717.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "2",
          name: "Marcus",
          date: "2023",
          title: "Developer",
          quote: "Professional and deeply creative.",
          tag: "Commercial",
          avatarSrc: "http://img.b2bpic.net/free-photo/modern-dining-room-living-room-with-luxury-decor_105762-1672.jpg",
          avatarAlt: "modern interior design client",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-architect-hands-working-blueprints-design-pan-professional-drawing-architect-plans_482257-33046.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "3",
          name: "Elena",
          date: "2022",
          title: "Homeowner",
          quote: "My living room feels like art.",
          tag: "Home",
          avatarSrc: "http://img.b2bpic.net/free-photo/medium-shot-real-estate-agent-showing-house_23-2150225241.jpg",
          avatarAlt: "client home design",
          imageSrc: "http://img.b2bpic.net/free-photo/stacked-marble-limestone-wall-structure_53876-147660.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "4",
          name: "John",
          date: "2022",
          title: "Manager",
          quote: "Impeccable showroom experience.",
          tag: "Business",
          avatarSrc: "http://img.b2bpic.net/free-photo/real-estate-concept-image-cute-redhead-girl-looking-curious-paper-house-model-thinking-buyi_1258-161362.jpg",
          avatarAlt: "homeowner portrait design",
          imageSrc: "http://img.b2bpic.net/free-photo/elegance-luxury-modern-domestic-kitchen-generated-by-ai_188544-27840.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
        {
          id: "5",
          name: "Yuki",
          date: "2021",
          title: "Client",
          quote: "Attention to detail is unmatched.",
          tag: "Architectural",
          avatarSrc: "http://img.b2bpic.net/free-photo/glad-positive-hipster-guy-dressed-casually-sits-table-waits-lunch-prepared-by-housewife-holds-digital-tablet_273609-8921.jpg",
          avatarAlt: "satisfied client home",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-view-modern-ceiling_1359-959.jpg?_wi=2",
          imageAlt: "happy home owner portrait",
        },
      ]}
      title="Client Journeys"
      description="What our clients say about the Sketsa Selaras experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Let's Collaborate"
      title="Start Your Design Journey"
      description="Ready to transform your space? Visit our showroom or schedule a consultation today."
      buttons={[
        {
          text: "Schedule Consultation",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Showroom",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Collection",
              href: "#products",
            },
          ],
        },
        {
          title: "Studio",
          items: [
            {
              label: "Architecture",
              href: "#",
            },
            {
              label: "Interiors",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Sketsa Selaras."
      bottomRightText="Architectural Interior Excellence"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
