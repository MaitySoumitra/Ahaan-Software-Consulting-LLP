
import React from "react";
// import { CallToAction } from "../../home/components/CallToAction";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const mediaFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Content Management System",
    description:
      "Build customized platforms for seamless digital content management. Our tailored CMS solutions empower you to create, distribute, and monetize content effortlessly across all major media channels.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Video Streaming Solutions",
    description:
      "Create an interactive and responsive video streaming platform for seamless on-demand content and OTT services. Deliver a world-class viewing experience with an immersive, engaging platform designed for diverse audiences across all age groups and demographics.",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Digital Right Management",
    description:
      "Protect your intellectual property, guarantee compliance with licensing agreements, and prevent copyright infringements with our cutting-edge DRM solutions. Stay secure with industry-leading protection from our expert team.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Augmented Reality & Virtual Reality",
    description:
      "Create immersive applications with cutting-edge AR/VR solutions delivering interactive virtual experiences. Transform user engagement and revolutionize digital interactions like never before!",
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=800",
  },
];

export const MediaEntertainment: React.FC = () => {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
        <div className="max-w-[1600px] mx-auto space-y-24">
          
          {/* TOP HERO / HEADER SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
                Media & Entertainment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                One World, Countless Local Perspectives!
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Expand your content's reach with innovative AI solutions and a robust network infrastructure. Whether you're a streaming service, a studio, or a digital content creator, our end-to-end solutions are designed to meet your unique business needs and drive global success.
              </p>
            </div>

            {/* Hero Banner Image */}
            <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] 2xl:h-[500px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1600"
                alt="Media & Entertainment Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* MIDDLE TEXT SECTION */}
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="relative z-10 max-w-5xl mx-auto space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
                Curating The Best Digital Experiences
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Your digital transformation begins now! With years of experience, deep domain expertise, and industry insights, we enhance the entire customer lifecycle—creating a sustainable business value chain through our comprehensive services and innovative solutions.
              </p>
            </div>
            {/* Subtle Decorative Glow */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* ZIGZAG FEATURES SECTION */}
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Your Business Needs To Stay Dynamic In An Ecosystem
              </h3>
              <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
            </div>

            {/* ZIGZAG LIST */}
            <div className="space-y-20 pt-8">
              {mediaFeatures.map((feature, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={feature.id}
                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Feature Image Box */}
                    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] overflow-hidden shadow-lg border border-gray-100 group relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Feature Content Box */}
                    <div className="w-full lg:w-1/2 space-y-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-50 text-[#d29b38] font-black text-xl border border-amber-200 shadow-sm">
                        0{index + 1}
                      </div>

                      <h4 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                        {feature.title}
                      </h4>

                      <p className="lg:text-base text-sm mt-2 text-gray-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
      {/* <CallToAction /> */}
    </>
  );
};
