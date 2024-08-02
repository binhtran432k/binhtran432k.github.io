import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { clsx } from "clsx";

export default component$(
  ({
    href,
    label,
    isDark,
    isSmall,
  }: {
    href: string;
    label: string;
    isDark?: boolean;
    isSmall?: boolean;
  }) => {
    return (
      <Link
        href={href}
        class={clsx(
          "group relative block h-[6rem] w-[9rem] md:text-lg",
          !isSmall && "md:h-[7.5rem] md:w-[11rem]",
        )}
      >
        <div
          class={clsx(
            "absolute h-[83%] w-[95%] translate-y-2 -rotate-[20deg] rounded-[58%42%55%45%/56%45%55%44%] border  transition-transform duration-300 ease-[cubic-bezier(0.5,2.5,0.5,0.5)] group-hover:translate-y-4 group-hover:rotate-0",
            isDark ? "border-dark" : "border-light",
          )}
        />
        <div
          class={clsx(
            "absolute h-[80%] w-[95%] translate-y-2 rotate-[20deg] rounded-[58%42%55%48%/56%45%60%44%] transition-transform duration-300  ease-[cubic-bezier(0.5,2.5,0.5,0.5)] group-hover:h-[81%] group-hover:w-[98%] group-hover:rotate-0 group-hover:rounded-[46%54%58%42%/48%35%65%52%]",
            isDark ? "bg-dark" : "bg-light",
          )}
        />
        <div
          class={clsx(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            isDark ? "text-light" : "text-dark",
          )}
        >
          {label}
        </div>
      </Link>
    );
  },
);
