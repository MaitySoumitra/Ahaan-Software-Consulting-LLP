import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUiUxDesignsAPI } from "../../../../api/Api";

type DesignItem = {
  _id?: string;
  title: string;
  image: string;
  link: string;
};

const DesignCard = memo(({ item }: { item: DesignItem }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl">
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
      )}

      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full rounded-xl transition-all duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } group-hover:scale-105`}
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center bg-gradient-to-t from-[#dfa53a]/90 via-[#dfa53a]/70 via-[#dfa53a]/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
        <span className="mb-4 text-center items-center font-semibold text-black">
          {item.title}
        </span>
      </div>
    </a>
  );
});

export default function UiUxDesign() {

  const [designs, setDesigns] = useState<DesignItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadDesigns = async () => {
      try {
        const res = await getAllUiUxDesignsAPI();

        let data: DesignItem[] = [];

        if (Array.isArray(res)) {
          data = res;
        } else if (Array.isArray(res?.data)) {
          data = res.data;
        } else if (res?.data && typeof res.data === "object") {
          data = [res.data];
        }

        // Show newest first
        data = [...data].reverse();

        if (!cancelled) {
          setDesigns(data);
        }
      } catch (error) {
        console.error("UI/UX load error:", error);

        if (!cancelled) {
          setDesigns([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadDesigns();

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleDesigns = designs.slice(0, 6);
  return (
    <section className="py-2">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">

          UI/UX Design Portfolio
        </h2>

        <p className="lg:text-base text-sm px-4 sm:px-8 mt-2">

          Browse through our creative UI/UX layout designs
        </p>
      </div>

      {/* Skeleton */}
      {loading ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
              aspect-[4/3]
              animate-pulse
              rounded-xl
              bg-gradient-to-r
              from-gray-200
              via-gray-100
              to-gray-200
            "
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {visibleDesigns.map((item, index) => (
            <DesignCard
              key={item._id ?? index}
              item={item}
            />
          ))}
        </div>
      )}

      {/* View All */}
      {!loading && designs.length > 6 && (
        <div className="mt-10 flex justify-center">
          <Link to="/all-design"
            className="shine-btn relative overflow-hidden uppercase
                bg-gradient-to-r
                from-[#C48A18]
                to-[#E6B33C]
                px-5
                xl:px-6
                2xl:px-8
                py-3
                xl:py-3.5
                text-sm
                xl:text-base
                font-semibold
                text-black
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:from-[#B57A0C]
                hover:to-[#D69D20]"
          >View All
          </Link>
        </div>
      )}
    </section>
  );
}