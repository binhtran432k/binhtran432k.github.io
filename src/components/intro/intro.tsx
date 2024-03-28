import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="container m-auto p-4 font-mono">
      <h2 class="text-xl md:text-2xl lg:text-3xl">Hi 👋, My name is</h2>
      <h1 class="text-2xl md:text-4xl lg:text-5xl">Binh Tran</h1>
      <ul>
        {["Full stack web developer", "Automation tester", "from Vietnam"].map(
          (txt, i) => (
            <li key={i} class="text-xl md:text-2xl lg:text-3xl">
              {txt}
            </li>
          ),
        )}
      </ul>
    </main>
  );
});
