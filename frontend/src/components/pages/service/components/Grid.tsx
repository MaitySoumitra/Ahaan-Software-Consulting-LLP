import React from "react";
import { Link } from "react-router-dom";

// ---------------------------------------------
// Types
// ---------------------------------------------
interface ServiceCard {
    image: string;
    title: string;
    description: string;
    features: string[];
    icons: string[];
    color: string;
}

// ---------------------------------------------
// Helper: convert any hex color to RGBA safely
// ---------------------------------------------
const hexToRgba = (hex: string, alpha: number = 0.25): string => {
    let r = 0,
        g = 0,
        b = 0;

    if (hex.length === 4) {
        // #RGB
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7 || hex.length === 9) {
        // #RRGGBB or #RRGGBBAA
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// ---------------------------------------------
// Data
// ---------------------------------------------
const cardData: ServiceCard[] = [
    {
        image: "https://ahaanmedia.com/ahaanwebsite/Service/card1.webp",
        title: "UI/UX Design",
        description:
            "UI/UX demands a deep understanding of online customer behaviour and continuous testing. With real market insights from diverse projects, we craft dynamic websites and mobile apps that deliver seamless, engaging brand interactions.",
        features: ["Graphic", "Wireframing", "Web app", "Architecture", "Mobile App"],
        icons: [
            "https://ahaanmedia.com/ahaanwebsite/technology/Adobe.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Canva.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Framer.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Figma.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Photoshop.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Wix.webp",
        ],
        color: "#ff4d4d",
    },
    {
        image: "https://ahaanmedia.com/ahaanwebsite/Service/card2.webp",
        title: "Web Development",
        description:
            "Content is king, but your website is the castle! Build a dynamic \u201cdigital empire\u201d for your brand with a visually captivating, SEO-friendly, feature-loaded, and mobile-responsive website – crafted by our expert team.",
        features: [
            "Frontend",
            "Backend",
            "API & Integration",
            "WordPress",
            "Shopify",
            "Mern Stack",
        ],
        icons: [
            "https://ahaanmedia.com/ahaanwebsite/technology/Next.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/React.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Node.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/JS.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Nuxt.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/HTML.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/CSS.webp",
        ],
        color: "#9a4dff",
    },
    {
        image: "https://ahaanmedia.com/ahaanwebsite/Service/card3.webp",
        title: "Application Development",
        description:
            "Grow and promote your business on the go with a robust, custom-tailored mobile app. Leveraging cutting-edge technology, we build iOS, Android, and hybrid solutions designed for more engagement, better scalability, and greater performance.",
        features: ["Hybrid App", "Native App", "React Native", "Kotlin", "Flutter"],
        icons: [
            "https://ahaanmedia.com/ahaanwebsite/technology/React.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Node.webp",
        ],
        color: "#00b894",
    },
    {
        image: "https://ahaanmedia.com/ahaanwebsite/Service/card4.webp",
        title: "E-commerce Development",
        description:
            "Boost sales and elevate customer satisfaction with our expert e-commerce web development solutions. We craft secure, high-performing stores with robust strategies to expand your customer base and drive measurable results that strengthen your online presence, increase brand visibility, and ensure consistent business growth worldwide.",
        features: ["Shopify", "Magento", "WooCommerce", "BigCommerce"],
        icons: [
            "https://ahaanmedia.com/ahaanwebsite/technology/Wordpress.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Shopify.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Webflow.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Magento.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Odoo.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Woo.webp",
        ],
        color: "#e15594ff",
    },
    {
        image: "https://ahaanmedia.com/ahaanwebsite/Service/card5.webp",
        title: "Social Media Management",
        description:
            "We go beyond likes, comments, and shares to craft well-researched, insight-driven, and sustainable content strategies that truly resonate with your audience. Trust us to spark meaningful conversations, foster a genuine community, and make real impact!",
        features: [
            "Instagram Marketing",
            "LinkedIn Marketing",
            "Social Media Reputation",
            "Social Media Analytics",
        ],
        icons: [
            "https://ahaanmedia.com/ahaanwebsite/technology/Instagram.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Linkedin.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Youtube.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Google.webp",
        ],
        color: "#0984e3",
    },
    {
        image: "https://ahaanmedia.com/ahaanwebsite/Service/card6.webp",
        title: "Google Marketing",
        description:
            "Guesswork wastes money—your business deserves better! Our Google Ads experts have mastered the art of high-performing campaigns. With data-driven precision, we optimize keywords, streamline chaotic account structures, and craft compelling copy and creatives. The result? Ad campaigns that don\u2019t just run—they dominate!",
        features: ["Google Ads", "Google Shopping", "Google Video Ads", "Google Analytics"],
        icons: [
            "https://ahaanmedia.com/ahaanwebsite/technology/Google.webp",
            "https://ahaanmedia.com/ahaanwebsite/technology/Gmail.webp",
        ],
        color: "#f9a825",
    },
];

// ---------------------------------------------
// Component
// ---------------------------------------------
const Grid: React.FC = () => {
    return (
        <>
            {/*
        Keyframes + a couple of hover rules that Tailwind's default utility
        set can't express (dynamic per-card color, gradient text animation,
        and the wavy border-radius animation). Kept scoped to this
        component via unique class names so nothing else is affected.
      */}
            <style>{`
        @keyframes grid-shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes grid-wave-radius {
          0% { border-radius: 20px 120px; }
          20% { border-radius: 35px 105px; }
          40% { border-radius: 50px 90px; }
          60% { border-radius: 65px 75px; }
          80% { border-radius: 40px 100px; }
          100% { border-radius: 20px 120px; }
        }
        .grid-animated-heading {
          background: linear-gradient(90deg, var(--main-color), #1d1d1d 40%, var(--main-color));
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: grid-shine 3s infinite linear;
        }
        .grid-image-box {
          animation: grid-wave-radius 5s ease-in-out infinite;
          border-radius: 20px 120px;
        }
        .grid-image-box img {
          animation: grid-wave-radius 5s ease-in-out infinite;
          border-radius: 20px 120px;
        }
          
        .grid-icon-bubble:hover {
          filter: grayscale(100%);
        }
      `}</style>

            <div className="mx-auto my-5 w-full max-w-[1600px] px-4 py-2 sm:px-8 lg:py-5">
                {cardData.map((service, index) => {
                    const isReverse = index % 2 !== 0;

                    const iconList = service.icons.map((url, i) => (
                        <div
                            key={i}
                            className="grid-icon-bubble flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full border-[0.2px] border-[#363535] bg-white/80 p-0 backdrop-blur-[6px] transition-all duration-300 ease-in-out hover:scale-[1.15] hover:bg-white/95 hover:shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
                        >
                            <img
                                src={url}
                                alt="tech icon"
                                loading="lazy"
                                className="h-auto w-[40px] p-0 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                    ));

                    return (
                        <div
                            key={service.title}
                            className={`my-5 flex flex-col items-center gap-x-8 lg:gap-x-12 md:flex-row ${isReverse ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Column */}
                            <div className="w-full md:w-5/12">
                                <div
                                    className="grid-image-box relative overflow-hidden p-[30px] shadow-[0_2px_25px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-[5px] hover:scale-[1.03] m-5 md:m-0"
                                    style={
                                        {
                                            "--border-color": service.color,
                                            background: `linear-gradient(135deg, ${hexToRgba(
                                                service.color,
                                                0.25
                                            )}, #ffffff00)`,
                                        } as React.CSSProperties
                                    }
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="block h-auto w-full transition-[border-radius] duration-500 ease-in-out"
                                    />
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="w-full md:flex-1">
                                <div className="mt-4 px-3 md:mt-0">
                                    <h1
                                        className="grid-animated-heading text-[1.5rem] font-black capitalize tracking-[2px] lg:text-[2.6rem]"
                                        style={{ "--main-color": service.color } as React.CSSProperties}
                                    >
                                        {service.title}
                                    </h1>

                                    <div className="mb-2 text-[13px] font-semibold text-black lg:text-[15px]">
                                        {service.features.map((item, i) => (
                                            <span key={i}>
                                                {item}
                                                {i < service.features.length - 1 && (
                                                    <span className="mx-1.5 text-[#888]"> • </span>
                                                )}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="mb-5 text-[13px] leading-[1.7] text-[#666] lg:text-[15px]">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-col flex-wrap items-center justify-between gap-4 sm:flex-row">
                                        <Link
                                            to="/portfolio"
                                            className="shine-btn grid-explore-btn flex h-[42px] min-w-[140px] items-center justify-center border border-solid px-[25px] py-[7px] font-semibold text-white transition-all duration-300 ease-in-out"
                                            style={{
                                                backgroundColor: service.color,
                                                borderColor: service.color,
                                            }}
                                        >
                                            Explore More
                                        </Link>

                                        <div className="flex flex-wrap items-center justify-center gap-2.5 text-[15px] sm:justify-start">
                                            {iconList}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Grid;
