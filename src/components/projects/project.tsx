import { component$ } from "@builder.io/qwik";
import CoolButton from "../cool-button/cool-button";

export default component$(() => {
  return (
    <article class="project">
      <div class="flex gap-2 text-center text-2xl">
        <span class="w-1/4 border-t-[1px]">1/8</span>
        <span class="w-3/4 border-t-[1px]">Feb 2022</span>
      </div>
      <div>
        <h3 class="mt-4 flex gap-2 text-2xl font-bold">
          <span class="project__name">Facebook Clone</span>
          <span class="project__type">(Very advanced)</span>
        </h3>
        <div class="flex items-center justify-between">
          <CoolButton href="#" label="Github" isDark isSmall />
          <img
            class="w-3/5 object-cover"
            width={800}
            height={600}
            src="https://buffer.com/library/content/images/size/w1000/2021/10/Untitled-design--27-.png"
            alt="Facebook"
          />
        </div>
      </div>
    </article>
  );
});
