import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import backgroundImage from "~/assets/background.jpg";
import { coolBackground } from "~/utils/cool-background";
import Header from "../header/header";
import Intro from "../intro/intro";
import ScrollDown from "../scroll-down/scroll-down";
import Social from "../social/social";

export default component$(() => {
  const imageRef = useSignal<Element>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (imageRef.value) {
      coolBackground(imageRef.value, backgroundImage);
    }
  });

  return (
    <div class="relative flex min-h-screen flex-col">
      <div
        class="absolute left-0 top-0 z-[-1] h-full w-full overflow-hidden"
        ref={imageRef}
      />
      <Header />
      <div class="flex grow flex-col flex-wrap justify-between">
        <div class="flex grow flex-col justify-between">
          <Intro />
          <Social />
        </div>
        <ScrollDown />
      </div>
    </div>
  );
});
