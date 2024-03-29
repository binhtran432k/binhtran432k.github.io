import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import bgImg from "~/assets/background.jpg";
import Header from "~/components/header/header";
import Social from "~/components/social/social";

export default component$(() => {
  return (
    <div
      class="relative flex min-h-[100vh] flex-col bg-cover bg-center [--bg-filter:theme(colors.background/50%)]"
      style={{
        backgroundImage: `linear-gradient(var(--bg-filter), var(--bg-filter)), url('${bgImg}')`,
      }}
    >
      <Header />
      <div class="flex grow flex-col flex-wrap justify-between px-4">
        <div class="container m-auto text-center">
          <h1 class="text-3xl font-bold">Page not found</h1>
          <p class="mt-2 text-lg">Sorry, that page doesn't seem to exist.</p>
        </div>
        <Social />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Page not found",
};
