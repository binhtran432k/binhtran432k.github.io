import { component$ } from "@builder.io/qwik";
import Project from "./project";

export default component$(() => {
  return (
    <div class="projects my-8 bg-light text-dark">
      <section class="projects container m-auto">
        <h2 class="text-3xl">Some of my work</h2>
        <Project />
      </section>
    </div>
  );
});
