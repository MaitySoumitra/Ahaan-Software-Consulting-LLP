import React from "react";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const constructionFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Project Management Solutions",
    description:
      "Enhance efficiency with advanced project management software, ensuring seamless scheduling, planning, and real-time collaboration for improved productivity and on-time delivery.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Construction Site Automation",
    description:
      "Leverage automation and IoT-driven solutions to streamline site operations, monitor equipment, and enhance workforce productivity with real-time insights and predictive maintenance.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Building Information Modelling (BIM) Solutions",
    description:
      "Optimize design, planning, and execution with cutting-edge BIM solutions, allowing for cost estimation, better visualization, and coordination across construction teams.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Safety & Compliance Management",
    description:
      "Ensure workplace safety and regulatory compliance with AI-powered risk assessment tools, real-time safety monitoring, and automated reporting systems to minimize hazards.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
];

export const Construction: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
      <div className="max-w-[1600px] mx-auto space-y-24">
        {/* TOP HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
              Construction Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Streamline Construction Operations With Smart Digital Solutions!
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Achieve new levels of agility with our tech-powered solutions, precisely tailored to the construction industry. Whether you're streamlining project management, optimizing resource allocation, or enhancing site safety, our custom solutions help you build smarter, faster, and safer!
            </p>
          </div>

          <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600"
              alt="Construction Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* MIDDLE TEXT SECTION */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
          <div className="relative z-10 max-w-5xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
              Embrace The Tech-Powered Future Of Construction
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Scaling tech transformation for construction companies is no longer optional — it's necessary! We go beyond just providing construction technology solutions — we empower contractors, engineers, and developers with advanced digital tools to optimize workflows, reduce costs, and drive project success.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* ZIGZAG FEATURES SECTION */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Unlock Big Uplifts In Construction With Our Solutions
            </h3>
            <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-20 pt-8">
            {constructionFeatures.map((feature, index) => {
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
