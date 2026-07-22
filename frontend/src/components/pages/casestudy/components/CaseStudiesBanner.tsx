

export const CaseStudiesBanner = () => {
  const bannerStyle = {
    backgroundImage: `url("https://ahaanmedia.com/ahaanwebsite/Banner/CaseStydyDetails.jpg")`,
  };

  return (
    <section
      className="relative flex min-h-[440px] md:min-h-[480px] lg:min-h-[600px] w-full items-center  bg-cover bg-center bg-no-repeat px-5 font-['Outfit',sans-serif]"
      style={bannerStyle}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-1" />

      {/* Banner Content Container constrained to max-w-[1600px] */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] flex justify-start">
        <div className="max-w-[900px] translate-y-11 md:translate-y-9 lg:translate-y-0">
          <h1 className="mb-5 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight text-white">
            Our Case Studies
          </h1>

          <p className="max-w-[700px] text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#f1f1f1]">
            We deliver innovative digital solutions including web development,
            UI/UX design, branding, and performance marketing to help your
            business grow faster and smarter in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};