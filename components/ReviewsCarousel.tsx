"use client";

import { useEffect, useState } from "react";

type Review = {
  body: string;
  name: string;
  pet: string;
};

type ReviewsCarouselProps = {
  reviews: Review[];
};

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const pageCount = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    const syncItemsPerPage = () => {
      if (window.innerWidth < 620) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 900) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    syncItemsPerPage();
    window.addEventListener("resize", syncItemsPerPage);

    return () => window.removeEventListener("resize", syncItemsPerPage);
  }, []);

  useEffect(() => {
    if (isPaused || pageCount < 2) {
      return;
    }

    const timerId = window.setInterval(() => {
      setCurrentPage((page) => (page + 1) % pageCount);
    }, 3800);

    return () => window.clearInterval(timerId);
  }, [isPaused, pageCount]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, pageCount - 1));
  }, [pageCount]);

  const showPage = (index: number) => {
    setCurrentPage((index + pageCount) % pageCount);
  };

  const reviewPages = Array.from({ length: pageCount }, (_, pageIndex) =>
    reviews.slice(pageIndex * itemsPerPage, pageIndex * itemsPerPage + itemsPerPage)
  );

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-line bg-[#f8fbf5] px-5 py-6 shadow-[0_18px_42px_rgba(67,107,82,0.1)] max-[620px]:px-4"
      aria-label="客户评价轮播"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm font-extrabold text-sage-dark">
          <span className="rounded-full bg-sage/15 px-3 py-1.5">4.9 / 5.0</span>
          <span className="text-muted">来自 2800+ 次洗护反馈</span>
        </div>
        <div className="flex gap-2">
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-2xl leading-none text-ink shadow-[0_8px_18px_rgba(38,49,44,0.08)]"
            type="button"
            aria-label="上一条评价"
            onClick={() => showPage(currentPage - 1)}
          >
            ‹
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-2xl leading-none text-ink shadow-[0_8px_18px_rgba(38,49,44,0.08)]"
            type="button"
            aria-label="下一条评价"
            onClick={() => showPage(currentPage + 1)}
          >
            ›
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {reviewPages.map((pageReviews, pageIndex) => (
            <div
              className="grid min-w-full flex-[0_0_100%] grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1"
              key={pageReviews.map((review) => review.name).join("-")}
              aria-hidden={pageIndex !== currentPage}
            >
              {pageReviews.map((review) => (
                <article className="h-full" key={review.name}>
                  <div className="flex min-h-[250px] flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-[0_12px_30px_rgba(38,49,44,0.06)] max-[620px]:min-h-[280px]">
                    <div>
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="text-lg leading-none text-gold">★★★★★</span>
                        <span className="rounded-full bg-coral/10 px-2.5 py-1 text-xs font-extrabold text-[#bc5e4a]">
                          已复购
                        </span>
                      </div>
                      <p className="m-0 text-[15px] leading-8 text-[#4b5a52]">
                        {review.body}
                      </p>
                    </div>
                    <div className="mt-6 border-t border-line pt-4">
                      <strong className="block text-sage-dark">{review.name}</strong>
                      <span className="mt-1.5 block text-sm font-semibold text-muted">
                        {review.pet}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2" aria-label="评价分页">
        {reviewPages.map((pageReviews, index) => (
          <button
            className={`h-2.5 rounded-full border-0 transition-all ${
              index === currentPage ? "w-7 bg-coral" : "w-2.5 bg-sage/25"
            }`}
            key={pageReviews.map((review) => review.name).join("-")}
            type="button"
            aria-label={`显示第 ${index + 1} 页评价`}
            onClick={() => showPage(index)}
          />
        ))}
      </div>
    </div>
  );
}
