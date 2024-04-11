import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const AVATAR_SIZE = 150;

export default component$(() => {
  return (
    <section class="container m-auto flex flex-wrap items-start justify-center p-4">
      <Link
        href="https://github.com/binhtran432k"
        class="relative mx-4 my-8 inline-block transition-opacity hover:opacity-80"
        target="_blank"
      >
        <img
          src="https://binhtran432k.com/binhtran432k/assets/avatar-lite.webp"
          height={AVATAR_SIZE}
          width={AVATAR_SIZE}
          style={{ width: `${AVATAR_SIZE}px`, height: `${AVATAR_SIZE}px` }}
          class="rounded-[50%] border-r-2 border-danger object-cover"
          alt="My Avatar"
        />
        <div class="absolute -top-2 left-5 h-[120%] w-3/4 -rotate-[20deg] rounded-[50%] border-l-2 border-danger shadow-xl shadow-info/30" />
      </Link>
      <div class="flex flex-col shadow-lg shadow-info/30">
        <Link
          href="https://github-readme-stats.vercel.app/api?username=binhtran432k&show_icons=true"
          class="inline-block transition-opacity hover:opacity-80"
          target="_blank"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=binhtran432k&show_icons=true&disable_animations=true&hide_border=true&bg_color=00000000&text_color=f9fafb&title_color=a855f7&icon_color=a855f7"
            height={220}
            width={500}
            alt="My Github Stats"
          />
        </Link>
        <Link
          href="https://github-readme-stats.vercel.app/api/top-langs/?username=binhtran432k&hide=html,css,nushell&langs_count=10&layout=compact"
          class="inline-block transition-opacity hover:opacity-80"
          target="_blank"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=binhtran432k&hide=html,css,nushell&langs_count=10&layout=compact&disable_animations=true&hide_border=true&bg_color=00000000&text_color=f9fafb&title_color=a855f7&icon_color=a855f7"
            height={240}
            width={320}
            alt="My Github Stats"
          />
        </Link>
      </div>
    </section>
  );
});
