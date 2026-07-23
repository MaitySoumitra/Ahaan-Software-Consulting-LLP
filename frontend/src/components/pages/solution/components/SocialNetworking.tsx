import React from "react";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const socialFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Community & Platform Building",
    description:
      "Design and deploy custom social networking platforms equipped with user profiles, instant messaging, activity feeds, and interactive content hubs tailored for modern digital communities.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Content Moderation & Security",
    description:
      "Ensure a safe environment for your community using AI-powered automated content moderation, fraud detection, end-to-end data privacy, and strict user authentication protocols.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Real-Time Engagement & Analytics",
    description:
      "Drive user retention with real-time push notifications, live streaming integrations, and intelligent analytics dashboards that track active users and engagement metrics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

export const SocialNetworking: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
      <div className="max-w-[1600px] mx-auto space-y-24">
        {/* TOP HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
              Social Networking
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Connect Modern Communities With Next-Gen Social Platforms
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              In an interconnected world, digital social platforms are the foundation of global interaction. We build scalable, high-performance, and secure social networking applications designed to engage users, foster active communities, and drive meaningful digital conversations.
            </p>
          </div>

          <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
              alt="Social Networking Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* MIDDLE TEXT SECTION */}
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
          <div className="relative z-10 max-w-5xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
              Empower Global Connection & Digital Engagement
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Whether you are creating a niche professional network, an interactive media channel, or a dynamic social portal, our robust architecture guarantees low-latency performance, seamless media sharing, and maximum platform scalability.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        {/* ZIGZAG FEATURES SECTION */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Key Features Of Our Social Solutions
            </h3>
            <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
          </div>

          <div className="space-y-20 pt-8">
            {socialFeatures.map((feature, index) => {
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
