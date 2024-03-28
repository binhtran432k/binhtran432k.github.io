import { type JSXNode, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(
  ({ label, href, icon }: { label: string; href: string; icon: JSXNode }) => {
    return (
      <div class="group relative flex place-items-center">
        <span class="absolute left-0 top-0 origin-[38%48%] text-info group-hover:animate-spin group-hover:[animation-duration:200ms]">
          {icon}
        </span>
        <span class="absolute left-0 top-0 origin-[58%40%] text-danger group-hover:animate-spin group-hover:[animation-duration:200ms] group-hover:[animation-delay:100ms]">
          {icon}
        </span>
        <Link
          href={href}
          target="_blank"
          title={`Social Link of ${label}`}
          class="z-10"
        >
          {icon}
        </Link>
      </div>
    );
  },
);
