import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Page not found</h1>
      <p>Sorry, that page doesn't seem to exist.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Page not found",
};
