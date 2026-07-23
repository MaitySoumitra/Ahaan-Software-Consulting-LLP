import React from "react";

const SolutionBanner: React.FC = () => {
  return (
    <section
      className="relative flex items-center w-full px-5 min-h-[500px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://ahaanmedia.com/ahaanwebsite/Banner/Solution.webp)`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Banner Content */}
      <div className="container relative z-20 w-full flex justify-start mx-auto">
        <div className="max-w-full xl:max-w-[900px]">
          <h1 className="font-['Outfit',sans-serif] font-bold text-white leading-[1.2] mb-5 text-left text-[clamp(30px,5vw,60px)]">
            Our Solutions
          </h1>

          <p className="font-['Outfit',sans-serif] text-[#f1f1f1] leading-[1.6] text-left max-w-[700px] text-[clamp(14px,2vw,20px)]">
            Delivering scalable enterprise software solutions tailored to your
            industry needs, driving efficiency and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionBanner;