import {
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import Review, { type ReviewData } from "./review";
import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

const reviews: ReviewData[] = [];
import swiperStyles from "swiper/swiper-bundle.css?inline";

export default component$(() => {
  if (reviews.length === 0) {
    return <></>;
  }
  useStyles$(swiperStyles);
  useStyles$(`
  .swiper-slide {
    filter: blur(2px) !important;
    transform: scale(0.8) !important;
    transition: all 0.2s;
  }
  .swiper-slide-active {
    filter: blur(0) !important;
    transform: scale(1) !important;
  }
  .swiper-pagination {
    position: static;
  }
  .swiper-pagination-bullet {
    width: 2.5rem;
    height: 0.25rem;
    border-radius: 50px;
    background: #fff;
  }
  .swiper-pagination-bullet-active {
    width: 4rem;
  }
  `);

  const swiperRef = useSignal<HTMLElement>();
  const nextRef = useSignal<HTMLElement>();
  const prevRef = useSignal<HTMLElement>();
  const paginationRef = useSignal<HTMLElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    new Swiper(swiperRef.value!, {
      spaceBetween: 30,
      pagination: {
        el: paginationRef.value,
        type: "bullets",
        clickable: true,
      },
      navigation: {
        prevEl: prevRef.value,
        nextEl: nextRef.value,
      },
      slidesPerView: 1,
      breakpoints: {
        768: { slidesPerView: 2 },
        1280: { slidesPerView: 3 },
      },
      modules: [Pagination, Navigation],
      centeredSlides: true,
      slideToClickedSlide: true,
    });
  });

  return (
    <section
      class="review-slide swiper container m-auto my-4 min-h-[400px] select-none"
      ref={swiperRef}
    >
      <div class="swiper-wrapper">
        {reviews.map((review) => (
          <div key={review.name} class="swiper-slide">
            <Review review={review} />
          </div>
        ))}
      </div>
      <div class="mt-8 flex justify-center">
        <div class="flex gap-2">
          <button
            class="group rounded-lg border-[1px] px-4 py-2 disabled:opacity-50"
            ref={prevRef}
          >
            <div class="h-3 w-3 translate-x-1/4 rotate-45 border-b-2 border-s-2 border-light" />
          </button>
          <button
            class="group rounded-lg border-[1px] px-4 py-2 disabled:opacity-50"
            ref={nextRef}
          >
            <div class=" h-3 w-3 -translate-x-1/4 rotate-45 border-e-2 border-t-2 border-light" />
          </button>
        </div>
        <div
          class="swiper-pagination hidden md:block"
          ref={paginationRef}
        ></div>
      </div>
    </section>
  );
});
