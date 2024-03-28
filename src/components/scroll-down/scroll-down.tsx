import { component$ } from "@builder.io/qwik";
import { clsx } from "clsx";

export default component$(() => {
  return (
    <button class="flex flex-col items-center" aria-label="Scroll down">
      <div class="flex h-10 w-6 justify-center rounded-xl border-2 border-current">
        <div class="mt-2 h-3 animate-bounce [animation-duration:300ms]">
          <div class="h-1 w-1 animate-bounce rounded-[50%] bg-current [animation-duration:300ms]" />
        </div>
      </div>
      <div class="mb-3 flex flex-col py-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            class={clsx(
              "h-3 w-3 rotate-45 animate-[pulse_1s_ease-in-out_alternate_infinite] border-b-2 border-r-2 border-current opacity-25",
              i > 0 && `[animation-delay:${(i * 100).toFixed(0)}ms]`,
            )}
          />
        ))}
      </div>
    </button>
  );
});
