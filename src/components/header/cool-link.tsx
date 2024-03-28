import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(
  ({ href, label }: { href: string; label: string }) => {
    return (
      <Link
        href={href}
        class="group relative flex w-fit place-items-center overflow-hidden"
      >
        <div class="absolute bottom-0 left-0 h-0.5 w-full origin-right scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.5,0.5,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
        <div class="translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.5,0.5,0.3,1)] group-hover:translate-x-[-150%]">
          {label}
        </div>
        <div class="absolute left-0 translate-x-[150%] transition-transform duration-300 ease-[cubic-bezier(0.5,0.5,0.3,1)] group-hover:translate-x-0">
          {label}
        </div>
      </Link>
    );
  },
);
