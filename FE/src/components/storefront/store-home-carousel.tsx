"use client";

import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";
import Link from "next/link";
import {
  A11y,
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HugeIcon } from "@/components/ui/huge-icon";
import { HERO_CAROUSEL_SLIDES } from "@/lib/mocks/hero-carousel-slides";

const slideMinHeight = "min-h-[clamp(32rem,72vh,56rem)]";

const navBtnClass =
  "hero-swiper-nav absolute top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-0 text-white shadow-none transition-[opacity,transform] duration-200 hover:scale-105 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/85 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none sm:inline-flex";

/**
 * Full-bleed hero carousel — [Swiper](https://swiperjs.com/) with fade, autoplay,
 * Hugeicons nav controls, and dynamic pagination (replaces basic Ant Design carousel).
 */
export function StoreHomeCarousel() {
  return (
    <div className="relative w-full max-w-full min-w-0">
      <Swiper
        className="hero-swiper w-full"
        modules={[A11y, Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={950}
        loop
        grabCursor
        keyboard={{ enabled: true, onlyInViewport: true }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          prevEl: ".hero-swiper-button-prev",
          nextEl: ".hero-swiper-button-next",
        }}
        aria-label="Featured campaigns"
      >
        {HERO_CAROUSEL_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id} className="!h-auto">
            <div
              className={`relative w-full ${slideMinHeight} overflow-hidden`}
            >
              <Image
                src={slide.imageUrl}
                alt={`${slide.title} — featured at Decent Perfume`}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={72}
                className="hero-slide-bg object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25"
                aria-hidden
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 py-16 text-center sm:px-10">
                <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-white/75 uppercase">
                  Decent Perfume
                </p>
                <h2 className="max-w-4xl font-sans text-3xl font-extrabold tracking-tight text-balance text-white drop-shadow-lg sm:text-4xl lg:text-5xl xl:text-6xl">
                  {slide.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed font-medium text-pretty text-white/88 sm:text-lg">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.ctaHref}
                  className="mt-10 inline-flex items-center justify-center rounded-2xl border border-white/45 bg-white/12 px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgb(0_0_0_/0.35)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/60 hover:bg-white/22"
                >
                  {slide.ctaLabel}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        className={`hero-swiper-button-prev ${navBtnClass} left-4`}
        aria-label="Previous slide"
      >
        <HugeIcon
          icon={ArrowLeft01Icon}
          size={32}
          strokeWidth={1.75}
          className="drop-shadow-[0_2px_10px_rgb(0_0_0_/0.55)]"
          aria-hidden
        />
      </button>
      <button
        type="button"
        className={`hero-swiper-button-next ${navBtnClass} right-4`}
        aria-label="Next slide"
      >
        <HugeIcon
          icon={ArrowRight01Icon}
          size={32}
          strokeWidth={1.75}
          className="drop-shadow-[0_2px_10px_rgb(0_0_0_/0.55)]"
          aria-hidden
        />
      </button>
    </div>
  );
}
