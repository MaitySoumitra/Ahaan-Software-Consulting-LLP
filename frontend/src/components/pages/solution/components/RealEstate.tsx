import React from "react";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const realEstateFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Integrated Property Management Systems",
    description:
      "Streamline operations with our comprehensive solutions, including property management, CRM, marketing automation, asset/portfolio management, and more!",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Analytics & Reporting",
    description:
      "We leverage advanced dashboards for performance tracking, market analysis, lease metrics, and financial insights, empowering data-driven decision-making.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Security & Compliance",
    description:
      "We provide robust security measures, data encryption, and compliance support with industry standards like GDPR and the Fair Housing Act, ensuring tenant privacy and regulatory adherence.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
];

export const RealEstate: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
      <div className="max-w-[1600px] mx-auto space-y-24">
        {/* TOP HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
              Real Estate Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Transform Real Estate With Cutting-Edge Digital Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              The real estate and property management industry revolves around property transactions, asset management, and driving rental business growth worldwide. We specialize in crafting bespoke tech, IT, and custom software solutions designed to empower property managers, real estate agencies, and developers.
            </p>
          </div>

          <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600"
              alt="Real Estate Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* MIDDLE TEXT SECTION */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
          <div className="relative z-10 max-w-5xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
              Innovate. Elevate. Collaborate. Bring Your Real Estate Vision To Life!
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Partner with us to enhance real estate operations with real-time monitoring, predictive maintenance, and smart building solutions. Leveraging IoT, mobile apps, and digital innovations, we forge customer satisfaction with elevated efficiency and excellence. Strengthen security with robust cybersecurity, access control, and cloud solutions to protect data, assets, and tenant privacy.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* ZIGZAG FEATURES SECTION */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Some Of The Key Features Of Our Offerings!
            </h3>
            <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-20 pt-8">
            {realEstateFeatures.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.id}
                  className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] overflow-hidden shadow-lg border border-gray-100 group relative rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

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
  );
};