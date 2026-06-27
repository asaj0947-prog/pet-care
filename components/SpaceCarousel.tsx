"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://image.pollinations.ai/prompt/photorealistic%20premium%20Chinese%20pet%20grooming%20salon%20interior%2C%20professional%20wash%20area%2C%20stainless%20steel%20pet%20bathtubs%2C%20independent%20grooming%20tables%2C%20white%20ceramic%20tile%2C%20light%20oak%20cabinets%2C%20glass%20partitions%2C%20neatly%20folded%20towels%2C%20upscale%20Shanghai%20boutique%20style%2C%20bright%20daylight%2C%20clean%20hygienic%20luxury%20interior%20photography%2C%20wide%20angle%2C%20no%20text%2C%20no%20logo%2C%20no%20people?width=1400&height=788&seed=2401&nologo=true&enhance=true",
    alt: "中国高端宠物洗护店专业洗护区",
    caption: "专业洗护区：不锈钢浴缸、独立洗护台与一客一用毛巾收纳"
  },
  {
    src: "https://image.pollinations.ai/prompt/photorealistic%20premium%20Chinese%20pet%20grooming%20salon%20drying%20and%20styling%20zone%2C%20professional%20hydraulic%20grooming%20tables%2C%20glass%20partition%2C%20built%20in%20storage%20wall%2C%20organized%20dryers%20combs%20and%20scissors%2C%20warm%20white%20and%20jade%20green%20palette%2C%20champagne%20metal%20details%2C%20high%20end%20Hangzhou%20boutique%20pet%20care%20store%2C%20bright%20clean%20interior%20design%20photography%2C%20wide%20angle%2C%20no%20text%2C%20no%20logo%2C%20no%20people?width=1400&height=788&seed=2402&nologo=true&enhance=true",
    alt: "中国高端宠物洗护店烘干美容区",
    caption: "烘干美容区：升降美容台、玻璃隔断与整洁工具墙"
  },
  {
    src: "https://image.pollinations.ai/prompt/photorealistic%20upscale%20Chinese%20pet%20grooming%20salon%20reception%20and%20pet%20waiting%20lounge%2C%20elegant%20curved%20front%20desk%2C%20glass%20product%20display%2C%20individual%20pet%20waiting%20pods%2C%20comfortable%20owner%20seating%2C%20light%20oak%20wood%2C%20ivory%20white%20walls%2C%20muted%20sage%20green%20accents%2C%20soft%20coral%20details%2C%20bright%20daylight%2C%20premium%20commercial%20interior%20photography%2C%20wide%20angle%2C%20no%20text%2C%20no%20logo%2C%20no%20people?width=1400&height=788&seed=2403&nologo=true&enhance=true",
    alt: "中国高端宠物洗护店接待等候区",
    caption: "接待等候区：精品前台、宠物休息舱与明亮舒适的等候空间"
  }
];

export default function SpaceCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timerId = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timerId);
  }, [isPaused]);

  const showSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg bg-[#dfe8e1] shadow-soft"
      aria-label="高端宠物洗护空间轮播"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <figure
            className="relative m-0 aspect-[16/9] min-w-full flex-[0_0_100%] bg-[#e8f0ea] max-[900px]:aspect-[4/3]"
            key={slide.src}
          >
            <img
              className="h-full w-full object-cover"
              src={slide.src}
              alt={slide.alt}
            />
            <figcaption className="absolute bottom-5 left-5 max-w-[min(440px,calc(100%-44px))] rounded-lg bg-white/90 px-4 py-3 font-extrabold text-ink max-[620px]:bottom-12 max-[620px]:left-3 max-[620px]:right-3 max-[620px]:max-w-none max-[620px]:text-sm">
              {slide.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border-0 bg-white/90 text-3xl leading-none text-ink shadow-[0_10px_24px_rgba(38,49,44,0.16)] max-[620px]:h-10 max-[620px]:w-10 max-[620px]:text-2xl"
        type="button"
        aria-label="上一张"
        onClick={() => showSlide(currentSlide - 1)}
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border-0 bg-white/90 text-3xl leading-none text-ink shadow-[0_10px_24px_rgba(38,49,44,0.16)] max-[620px]:h-10 max-[620px]:w-10 max-[620px]:text-2xl"
        type="button"
        aria-label="下一张"
        onClick={() => showSlide(currentSlide + 1)}
      >
        ›
      </button>
      <div
        className="pointer-events-none absolute bottom-4 left-0 right-0 flex justify-center gap-2.5"
        aria-label="轮播图分页"
      >
        {slides.map((slide, index) => (
          <button
            className={`pointer-events-auto h-2.5 rounded-full border-0 transition-all ${
              index === currentSlide ? "w-7 bg-coral" : "w-2.5 bg-white/60"
            }`}
            key={slide.src}
            type="button"
            aria-label={`显示第 ${index + 1} 张`}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
