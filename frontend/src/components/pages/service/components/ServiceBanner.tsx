const ServiceBanner: React.FC = () => {
  return (
    <section
      className=" relative w-full overflow-hidden flex items-center min-h-[300px] sm:min-h-[420px]
                  md:min-h-[480px] lg:min-h-[500px] bg-cover bg-center bg-top md:bg-center bg-no-repeat "
      style={{
        backgroundImage:
          'url("https://ahaanmedia.com/ahaanwebsite/Banner/Service.webp")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[1600px] mx-auto px-4 sm:px-8 py-12 lg:py-20">
        <div className="max-w-[900px] max-[768px]:translate-y-[35px] max-[480px]:translate-y-[45px]">
          <h1 className="mb-5 text-[clamp(30px,5vw,60px)] font-bold leading-[1.2] max-[480px]:leading-[1.3] text-white">
            Our Services
          </h1>

          <p className="max-w-[700px] text-[clamp(14px,2vw,20px)] leading-[1.6] text-[#F1F1F1]">
            We deliver innovative digital solutions including web development,
            UI/UX design, branding, and performance marketing to help your
            business grow faster and smarter in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;