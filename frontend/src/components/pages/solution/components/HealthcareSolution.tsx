import React from "react";
// import { CallToAction } from "../../home/components/CallToAction";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const healthcareFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "EHR Development",
    description:
      "Empower healthcare experts with seamless access to patient medical history, past treatments, and diagnosis reports through our cutting-edge EHR (Electronic Health Records) Development Services. As a leading software provider, we streamline healthcare operations with automated workflows, real-time patient insights, and more!",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Online Consultation",
    description:
      "Revolutionize patient care with our software solutions for online consultation and telemedicine! Enable patients to connect with healthcare experts, receive remote care, and order medicines online — anytime, anywhere.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Medical Billing Software",
    description:
      "Streamline your billing process with our medical billing software solution, ensuring secure payments and error-free transactions. Empower patients to track expenses and plan treatments effortlessly.",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Hospital Management Software",
    description:
      "Redefine patient experience and reimagine hospital operations with our hospital management software. From hassle-free digital appointment booking to secure billing, real-time inventory management, and smooth patient-doctor communication, we've got everything covered!",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
];

export const HealthcareSolution: React.FC = () => {
  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
        <div className="max-w-[1600px] mx-auto space-y-24">
          
          {/* TOP HERO / HEADER SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
                Healthcare Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Improving Healthcare With Value-Centric Solutions!
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We are revolutionizing modern healthcare operations with innovative digital solutions, making them more agile and effective. Focused on driving digital transformation in healthcare, we enhance care coordination while empowering staff. Collaborate with us to elevate the quality of healthcare for both providers and patients.
              </p>
            </div>

            {/* Hero Banner Image */}
            <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] 2xl:h-[500px] overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1600"
                alt="Healthcare Development Solutions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* MIDDLE TEXT SECTION */}
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="relative z-10 max-w-5xl mx-auto space-y-4">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
                Your Business Needs To Stay Dynamic In An Ecosystem
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Enhance patient outcomes and optimize healthcare efficiency with our comprehensive healthcare software development services. By digitizing your healthcare operations, we streamline clinical administration, ensuring your venture stays ahead of industry changes and challenges.
              </p>
            </div>
            {/* Subtle Decorative Glow */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>

          {/* ZIGZAG FEATURES SECTION */}
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
                Our Healthcare Development Solutions
              </h3>
              <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
            </div>

            {/* ZIGZAG LIST */}
            <div className="space-y-20 pt-8">
              {healthcareFeatures.map((feature, index) => {
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
