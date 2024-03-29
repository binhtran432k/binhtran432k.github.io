import { component$ } from "@builder.io/qwik";
import CoolLink from "./cool-link";

export default component$(() => {
  return (
    <nav>
      <ul class="flex flex-wrap items-center gap-4 md:gap-8 md:px-2">
        {(
          [
            ["/", "Home"],
            ["#", "Reviews"],
            ["#", "Projects"],
            ["#", "Insights"],
            ["#", "Faq"],
          ] as [string, string][]
        ).map(([href, label]) => (
          <li key={label} class="font-bold md:text-lg">
            <CoolLink href={href} label={label} />
          </li>
        ))}
      </ul>
    </nav>
  );
});
