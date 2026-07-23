
import React from "react";
// import { CallToAction } from "../../home/components/CallToAction";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const manufacturingFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Industrial Manufacturing Solutions",
    description:
      "To stay infallible against digital disruption, shifting customer demands, and evolving markets, manufacturing leaders must embrace smarter, more connected products and transition from selling physical goods to service-driven models. We empower you to leverage cutting-edge technologies like machine learning, analytics, IoT, and blockchain for a future-ready manufacturing ecosystem.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Process Manufacturing Solutions",
    description:
      "We help process manufacturers transition from isolated automation systems to fully connected, intelligent operations. Our solutions streamline production, reduce costs, optimize plant efficiency, and minimize environmental impact for a smarter, more sustainable future.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Smart Supply Chain & Logistics",
    description:
      "Integrate end-to-end visibility into your manufacturing supply chain. Enhance inventory tracking, automated procurement, and predictive forecasting to ensure seamless raw material availability.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Predictive Maintenance & Quality Control",
    description:
      "Eliminate equipment downtime and improve product precision with AI-driven inspection and predictive asset monitoring designed for modern smart factories.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
];

export const Manufacturing: React.FC = () => {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
        <div className="max-w-[1600px] mx-auto space-y-24">
          
          {/* TOP HERO / HEADER SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
                Manufacturing Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Make The Digital Transition To Manufacturing
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Automation, analytics, AI, integrated systems, and smart factories—our advanced digital manufacturing solutions empower modern manufacturers to make data-driven decisions in real time. Partner with us to build a more human-centric, sustainable, and resilient manufacturing enterprise!
              </p>
            </div>

            {/* Hero Banner Image */}
            <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] 2xl:h-[500px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
                alt="Digital Manufacturing Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* MIDDLE TEXT SECTION */}
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="relative z-10 max-w-5xl mx-auto space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
                Creating A Transformative, Sustainable Ecosystem
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We partner with global manufacturers to adapt and thrive with future-forward solutions. Harnessing robust technologies like quantum computing, GenAI, and IoT, we strive to foster sustainable resilience, growth, and innovation, shaping a purpose-led manufacturing ecosystem.
              </p>
            </div>
            {/* Subtle Decorative Glow */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* ZIGZAG FEATURES SECTION */}
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Your Challenges, Our Solutions!
              </h3>
              <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
            </div>

            {/* ZIGZAG LIST */}
            <div className="space-y-20 pt-8">
              {manufacturingFeatures.map((feature, index) => {
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
