import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Landing from "~/components/landing/landing";

export default component$(() => {
  return (
    <>
      <Landing />
    </>
  );
});

export const head: DocumentHead = {
  title: "BINH TRAN - Fullstack Developer",
  meta: [
    {
      name: "description",
      content:
        "Full stack web developer, Automation tester with more than three years experience in Open Source development.",
    },
    {
      name: "keywords",
      content:
        "binh tran, fullstack, automation, developer, tester, web development",
    },
    {
      name: "author",
      content: "Binh Tran",
    },
  ],
};
