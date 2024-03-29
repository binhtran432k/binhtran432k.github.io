import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <button class="flex flex-col items-center" aria-label="Scroll down">
      <div class="flex h-10 w-6 justify-center rounded-xl border-2 border-current">
        <div class="mt-2 h-1 w-1 animate-deepBounce rounded-[50%] bg-current [animation-duration:300ms]" />
      </div>
      <div class="mb-3 flex flex-col py-1">
        <div class="h-3 w-3 rotate-45 animate-deepPulse border-b-2 border-r-2 border-current opacity-25 [animation-delay:100ms]" />
        <div class="h-3 w-3 rotate-45 animate-deepPulse border-b-2 border-r-2 border-current opacity-25 [animation-delay:200ms]" />
        <div class="h-3 w-3 rotate-45 animate-deepPulse border-b-2 border-r-2 border-current opacity-25 [animation-delay:300ms]" />
      </div>
    </button>
  );
});
