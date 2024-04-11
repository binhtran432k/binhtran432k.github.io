import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import BackgroundImage from "~/assets/background.jpg?jsx";
import Header from "~/components/header/header";
import Social from "~/components/social/social";

export default component$(() => {
  return (
    <div class="relative flex min-h-screen flex-col">
      <BackgroundImage
        class="absolute left-0 top-0 z-[-1] h-full w-full object-cover brightness-50"
        alt="Background"
      />
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
