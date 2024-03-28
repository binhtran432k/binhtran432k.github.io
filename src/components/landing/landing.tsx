import { component$ } from "@builder.io/qwik";
import bgImg from "~/assets/background.jpg";
import Header from "../header/header";
import Intro from "../intro/intro";
import Social from "../social/social";
import ScrollDown from "../scroll-down/scroll-down";

export default component$(() => {
  return (
    <div
      class="relative flex h-[100vh] flex-col bg-cover bg-center [--bg-filter:theme(colors.background/50%)]"
      style={{
        backgroundImage: `linear-gradient(var(--bg-filter), var(--bg-filter)), url('${bgImg}')`,
      }}
    >
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
