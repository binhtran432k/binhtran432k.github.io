import { component$ } from "@builder.io/qwik";
import CoolButton from "./cool-button";
import Nav from "./nav";

export default component$(() => {
  return (
    <header class="container m-auto flex items-center justify-between gap-2 px-4 pt-4">
      <Nav />
      <CoolButton href="#" label="Contact" />
    </header>
  );
});
