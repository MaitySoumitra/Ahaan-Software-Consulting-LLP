
import React from "react";
// import { CallToAction } from "../../home/components/CallToAction";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const logisticsFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Supply Chain Management Solutions",
    description:
      "Enhance efficiency, visibility, and coordination across your supply chain with real-time tracking, demand forecasting, and AI-powered analytics.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Fleet & Transportation Management",
    description:
      "Optimize route planning, reduce fuel costs, and boost fleet performance with GPS tracking, automated dispatching, predictive maintenance solutions, and more!",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Warehouse & Inventory Management",
    description:
      "Improve inventory accuracy, reduce storage costs, and streamline warehouse operations with IoT-enabled tracking, automated stock management, and cloud-based solutions.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Last-Mile Delivery Optimization",
    description:
      "Ensure faster, more efficient deliveries with AI-driven route optimization, real-time tracking, and automated proof-of-delivery solutions.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
  },
];

export const Logistics: React.FC = () => {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
        <div className="max-w-[1600px] mx-auto space-y-24">
          
          {/* TOP HERO / HEADER SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
                Logistics Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                On The Road To Transformation With Future-Ready Logistics
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                By harnessing the power of logistics, transportation, and digital innovation, industry leaders are gaining real-time visibility into their supply chains, accessing critical data instantly, and accelerating order fulfillment worldwide. We help you leap ahead by leveraging the latest technologies like machine learning, IoT, blockchain, and predictive analytics for smarter, more efficient logistics operations.
              </p>
            </div>

            {/* Hero Banner Image */}
            <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] 2xl:h-[500px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1600"
                alt="Logistics & Transportation Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* MIDDLE TEXT SECTION */}
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="relative z-10 max-w-5xl mx-auto space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
                Leap Ahead In The Modern Logistics Ecosystem
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Driven by quality and results, we modernize even the most complex logistical systems with advanced, data-driven solutions! Our targeted digital transportation technology solutions empower providers for unparalleled growth and limitless success.
              </p>
            </div>
            {/* Subtle Decorative Glow */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* ZIGZAG FEATURES SECTION */}
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Compete Against Industry Giants With Our Solutions
              </h3>
              <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
            </div>

            {/* ZIGZAG LIST */}
            <div className="space-y-20 pt-8">
              {logisticsFeatures.map((feature, index) => {
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
