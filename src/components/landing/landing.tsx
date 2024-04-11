import { component$ } from "@builder.io/qwik";
import BackgroundImage from "~/assets/background.jpg?jsx";
import Header from "../header/header";
import Intro from "../intro/intro";
import Social from "../social/social";
import ScrollDown from "../scroll-down/scroll-down";

export default component$(() => {
  return (
    <div class="relative flex min-h-screen flex-col">
      <BackgroundImage
        class="absolute left-0 top-0 z-[-1] h-full w-full object-cover brightness-50"
        alt="Background"
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
