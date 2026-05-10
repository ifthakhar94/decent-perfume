"use client";

import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { CustomArrowProps } from "@ant-design/react-slick";
import { Carousel, type CarouselProps } from "antd";
import Image from "next/image";
import Link from "next/link";

import { HugeIcon } from "@/components/ui/huge-icon";
import { STOREFRONT_CATEGORY_CARDS } from "@/lib/mocks/storefront-category-carousel";

function CategoryPrevArrow({ className, style, onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`category-ant-arrow category-ant-arrow--prev ${className ?? ""}`}
      style={style}
      onClick={onClick}
      aria-label="Previous categories"
    >
      <HugeIcon
        icon={ArrowLeft01Icon}
        size={20}
        strokeWidth={1.75}
        aria-hidden
      />
    </button>
  );
}

function CategoryNextArrow({ className, style, onClick }: CustomArrowProps) {
  return (
    <button
      type="button"
      className={`category-ant-arrow category-ant-arrow--next ${className ?? ""}`}
      style={style}
      onClick={onClick}
      aria-label="Next categories"
    >
      <HugeIcon
        icon={ArrowRight01Icon}
        size={20}
        strokeWidth={1.75}
        aria-hidden
      />
    </button>
  );
}

const categoryCarouselResponsive: NonNullable<CarouselProps["responsive"]> = [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

/**
 * Shop-by-category rail using **Ant Design `Carousel`** (react-slick). Responsive
 * `slidesToShow` keeps iPhone SE–width layouts inside the viewport; Hugeicons arrows.
 */
export function StoreHomeCategoryCarousel() {
  return (
    <section
      aria-labelledby="store-home-categories-heading"
      className="w-full min-w-0 px-3 pt-10 pb-2 sm:px-6 sm:pt-12 lg:px-10"
    >
      <div className="mx-auto max-w-7xl min-w-0">
        <div className="mb-5 md:mb-8">
          <h2
            id="store-home-categories-heading"
            className="text-perfume-ink font-sans text-lg font-extrabold tracking-tight sm:text-xl md:text-2xl"
          >
            Shop by category
          </h2>
          <p className="text-perfume-ink-muted mt-1 max-w-2xl text-xs font-medium sm:text-sm md:text-base">
            Browse by mood, occasion, and collection—each tile opens the shop
            filtered for that category.
          </p>
        </div>

        <div className="relative w-full max-w-full min-w-0">
          <Carousel
            rootClassName="category-ant-carousel"
            className="category-ant-carousel-inner"
            dots
            dotPlacement="bottom"
            infinite={false}
            draggable
            swipe
            swipeToSlide
            arrows
            prevArrow={<CategoryPrevArrow />}
            nextArrow={<CategoryNextArrow />}
            slidesToShow={5}
            slidesToScroll={2}
            responsive={categoryCarouselResponsive}
            speed={380}
          >
            {STOREFRONT_CATEGORY_CARDS.map((cat) => (
              <div key={cat.id} className="px-1.5 sm:px-2">
                <Link
                  href={cat.href}
                  className="group focus-visible:ring-perfume-wine/50 block min-h-0 min-w-0 overflow-hidden rounded-2xl border border-white/55 bg-white/25 shadow-rose-950/10 backdrop-blur-xl transition duration-300 outline-none hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/35 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                >
                  <article className="flex min-h-0 min-w-0 flex-col">
                    <div className="bg-perfume-blush/70 relative aspect-[4/5] w-full min-w-0 overflow-hidden">
                      <Image
                        src={cat.imageUrl}
                        alt={`${cat.title}: ${cat.teaser}`}
                        fill
                        sizes="(max-width: 480px) 46vw, (max-width: 768px) 33vw, 200px"
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                      />
                      <div
                        className="from-perfume-bordeaux/80 via-perfume-bordeaux/15 absolute inset-0 bg-gradient-to-t to-transparent"
                        aria-hidden
                      />
                      <div className="absolute inset-x-0 bottom-0 p-2.5 pt-7 sm:p-3 sm:pt-8">
                        <h3 className="text-xs leading-tight font-bold text-white drop-shadow-md sm:text-sm md:text-base">
                          {cat.title}
                        </h3>
                        <p className="mt-0.5 line-clamp-2 text-[0.65rem] font-medium text-white/85 sm:text-xs">
                          {cat.teaser}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
