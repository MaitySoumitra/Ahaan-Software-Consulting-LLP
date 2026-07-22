import { useEffect, useMemo, useState, memo } from "react";
import { getAllUiUxDesignsAPI } from "../../../../api/Api";
import { Link } from "react-router-dom";

const COLUMN_COUNT = 4;

type UiUxDesign = {
  _id?: string;
  image: string;
  title: string;
  link: string;
};

type GalleryImageProps = {
  src: string;
  alt: string;
  href: string;
};

type ScrollColumnProps = {
  images: UiUxDesign[];
  reverse?: boolean;
};
const GalleryImage = memo(
  ({ src, alt, href }: GalleryImageProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="
            h-40
            w-full
            rounded-lg
            border
            border-slate-100
            object-cover
            transition-transform
            duration-300
            hover:scale-[1.03]

            sm:h-52
            md:h-64
            lg:h-72
            xl:h-[300px]
          "
        />
      </a>
    );
  }
);

GalleryImage.displayName = "GalleryImage";
const ScrollColumn = memo(
  ({ images, reverse }: ScrollColumnProps) => {
    const doubled = [...images, ...images];

    return (
      <div
        className={`
          h-full
          overflow-hidden
          rounded-xl

          ${reverse ? "mt-10 h-[calc(100%-40px)]" : ""}
        `}
      >
        <div
          className={`
            flex
            flex-col
            gap-3
            webdev-column-track ${reverse ? "webdev-track-reverse" : ""}
          `}
        >
          {doubled.map((item, index) => (
            <GalleryImage
              key={`${item._id}-${index}`}
              src={item.image}
              alt={item.title}
              href={item.link}
            />
          ))}
        </div>
      </div>
    );
  }
);

ScrollColumn.displayName = "ScrollColumn";

export default function UiUxDesign() {
  const [items, setItems] = useState<UiUxDesign[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadData() {
      try {
        const res = await getAllUiUxDesignsAPI();

        if (!cancelled) {
          setItems(res.data?.data ?? []);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      cancelled = true;
    };
  }, []);

  const columns = useMemo(() => {
  const cols: UiUxDesign[][] = Array.from(
    { length: COLUMN_COUNT },
    () => []
  );

  (items ?? []).forEach((item, index) => {
    cols[index % COLUMN_COUNT].push(item);
  });

  return cols;
}, [items]);

    if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-8">

        <div className="mb-10 text-center">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">
          UI/UX Design Portfolio
        </h2>
        <p className="lg:text-base text-sm px-4 sm:px-8 mt-2">
          Browse through our creative UI/UX layout designs
        </p>

        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-3
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {Array.from({ length: COLUMN_COUNT }).map((_, column) => (
            <div
              key={column}
              className="flex flex-col gap-3"
            >
              {Array.from({ length: 3 }).map((_, card) => (
                <div
                  key={card}
                  className="
                    h-52
                    animate-pulse
                    rounded-xl
                    bg-slate-200
                  "
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }
      if (error || items.length === 0) {
    return (
      <section className="container mx-auto py-10 text-center">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">

            UI/UX Design Portfolio
        </h2>
        <p className="text-muted">
         
          Could not load projects.
        </p>

      </section>
    );
  }
      return (
    <section className="container mx-auto py-8 overflow-hidden">

      {/* Heading */}

      <div className="text-center mb-12">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1d20] leading-tight">

             UI/UX Design Portfolio
        </h2>

        <p className="lg:text-base text-sm px-4 sm:px-8 mt-2">
          Browse through our creative UI/UX layout designs
        </p>

      </div>

      {/* Gallery */}

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-3
          h-[360px]
          md:h-[420px]
          lg:h-[560px]
          overflow-hidden
        "
      >
        {columns.map(
          (column, index) =>
            column.length > 0 && (
              <div
                key={index}
                className={`
                  overflow-hidden
                  rounded-xl
                  ${
                    index % 2 === 1
                      ? "mt-8 lg:mt-10 h-[calc(100%-40px)]"
                      : ""
                  }
                `}
              >
                <ScrollColumn
                  images={column}
                  reverse={index % 2 === 1}
                />
              </div>
            )
        )}
      </div>

      {/* Button */}

      <div className="text-center mt-12">

       <Link  to="/all-designs"
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

    </section>
  );
}