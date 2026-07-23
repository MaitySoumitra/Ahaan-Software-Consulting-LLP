import React from "react";
import { CallToAction } from "../../home/components/CallToAction";

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ecommerceFeatures: FeatureCard[] = [
  {
    id: 1,
    title: "Boost Your Growth",
    description:
      "Boost your retail store's digital presence and meet evolving market demands with our innovative, user-centric e-commerce development services—designed to scale your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Gain More Online Visibility",
    description:
      "We create lucrative, visually compelling e-storefronts that enhance your retail store's digital presence, attract millennial shoppers, and redefine their shopping experience.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Streamline Complex Inventory Operations",
    description:
      "Get a customized e-store and inventory management solution to monitor, manage, and procure store items in real-time. Stay ahead of the competition by streamlining retail processes and enhancing operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Flexible Payment Options",
    description:
      "Empower your customers with flexible payment options through seamless payment gateway integration, boosting sales closure rates with our e-commerce app and software development services.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Redefine Buying Experience",
    description:
      "Leverage AI-powered product search to display personalized buying options based on user activity, improving their overall shopping experience with custom-tailored recommendations.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
];

export const EcommerceSolution: React.FC = () => {
  return (
    <>
    <section className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white text-[#1c1d20]">
      <div className="max-w-[1600px] mx-auto space-y-24">
        
        {/* TOP HERO / HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-sm font-bold tracking-widest text-[#d29b38] uppercase bg-amber-50 px-4 py-2 rounded-full inline-block border border-amber-200">
              E-Commerce
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Your Trusted Growth Partner for E-commerce Development Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              As the experience economy evolves, we envision a future where online
              shopping transcends mere transactions—transforming into interactive,
              immersive experiences that captivate, engage, and inspire. In this
              next-generation E-store, each visit is more than just a purchase;
              it's a personalized experience that redefines digital retail.
            </p>
          </div>

          {/* Hero Banner Image */}
          <div className="lg:col-span-6 w-full h-[350px] sm:h-[450px] 2xl:h-[500px]  overflow-hidden shadow-2xl bg-gray-100 border border-gray-100 group">
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=1600"
              alt="E-commerce Development Solutions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* MIDDLE TEXT SECTION */}
<div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center">
  <div className="relative z-10 max-w-5xl mx-auto space-y-4">
    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#d29b38] leading-tight">
      Unlock Your Retail Business' Full Potential
    </h3>
    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
      Whether you need an e-commerce app to enhance B2C engagement, a B2B
      portal to connect manufacturers and wholesalers, or a powerful
      retail ERP to streamline operations, we've got you covered! Partner
      with us to expand your e-business reach and grow your market share
      with scalable, flexible e-commerce solutions!
    </p>
  </div>
  {/* Subtle Decorative Glow */}
  <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#d29b38]/20 rounded-full blur-3xl pointer-events-none"></div>
</div>

        {/* ZIGZAG FEATURES SECTION */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
              Conquer Retail Challenges With Custom E-Commerce Solutions
            </h3>
            <div className="w-24 h-1.5 bg-[#d29b38] mx-auto rounded-full"></div>
          </div>

          {/* ZIGZAG LIST */}
          <div className="space-y-20 pt-8">
            {ecommerceFeatures.map((feature, index) => {
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

                    <p className="lg:text-base text-sm  mt-2">
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
    <CallToAction/>
    </>
  );
};
