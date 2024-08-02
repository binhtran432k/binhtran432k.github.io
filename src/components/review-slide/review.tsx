import { component$ } from "@builder.io/qwik";

export interface ReviewData {
  content: string;
  name: string;
  job: string;
  img: string;
}

export default component$(({ review }: { review: ReviewData }) => {
  return (
    <article class="review flex gap-1 px-2">
      <div class="font-serif text-6xl text-secondary">&ldquo;</div>
      <div class="flex flex-col border-t-[1px] border-t-light pt-6">
        <div class="flex items-start gap-2">
          <div class="review__content first-letter:font-serif first-letter:text-3xl first-letter:text-secondary">
            {review.content}
          </div>
          <img
            class="review__img rounded-[35px] object-cover"
            src={review.img}
            width={70}
            height={100}
          />
        </div>
        <div class="ml-8 mt-4 font-serif text-sm opacity-80">
          <div class="review__name">{review.name}</div>
          <div class="review__job">{review.job}</div>
        </div>
      </div>
    </article>
  );
});
