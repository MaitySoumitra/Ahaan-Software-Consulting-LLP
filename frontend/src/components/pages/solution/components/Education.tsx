import React from "react";

// interface for Education feature cards
interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string; // The URL/source of the feature image
}

const educationFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Corporate Learning Solutions",
    description:
      "Convert corporate training with our unique and innovative EdTech solutions. Enhance your employee skills and drive organizational growth with tailored training programs and achieve all-round success.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800", // Team in a meeting
  },
  {
    id: 2,
    title: "Education-to-Career (E2C) Solutions",
    description:
      "Transform the E2C pathways of learners by developing large-scale e-learning and education software development solutions, precisely tailored to our clients' needs.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800", // Hands on a stack of graduation books/cap
  },
  {
    id: 3,
    title: "Professional Upskilling Programs",
    description:
      "We equip students, job seekers, and working professionals with skill-based professional e-learning training solutions designed to enhance career growth and unlock their full potential.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800", // Desk setup with a laptop showing a learning dashboard
  },
];

export const Education: React.FC = () => {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
        <div className="max-w-[1600px] mx-auto space-y-24">
          
          {/* TOP HERO / HEADER SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
                EDUCATION SOLUTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Your Trusted Partner for Transforming Educational Experiences
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We create next-generation e-learning platforms and software that empower
                educators, engage students, and redefine the landscape of learning. Our
                customized, user-centric solutions scale your institution's digital
                capabilities and reach.
              </p>
            </div>

            {/* Hero Banner Image */}
            <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] 2xl:h-[500px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600" // Students looking at screens in a lab
                alt="Education Development Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* MIDDLE TEXT SECTION - Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="relative z-10 max-w-5xl mx-auto space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
                Conquer Academic Challenges With Custom EdTech Solutions
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Whether you need a robust Learning Management System, personalized K-12
                learning paths, or specialized assessment tools, we deliver scalable and
                flexible solutions to modernize your educational infrastructure.
              </p>
            </div>
            {/* Subtle Decorative Glow */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* ZIGZAG FEATURES SECTION */}
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Revolutionize Education Across Sectors with Our Custom Solutions
              </h3>
              <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
            </div>

            {/* ZIGZAG LIST */}
            <div className="space-y-20 pt-8">
              {educationFeatures.map((feature, index) => {
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
      
      {/* 
        You can include the CallToAction component below. 
        Uncomment the line below when CallToAction is available.
        <CallToAction/> 
      */}
    </>
  );
};
