import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="bg-warning px-4 py-8 text-dark">
      <div class="overflow-hidden whitespace-nowrap text-lg lg:text-2xl xl:text-3xl">
        <h2 class="mb-4 text-center font-bold">My expertise</h2>
        <div class="flex flex-col gap-2 lg:gap-4 xl:gap-6">
          <ul
            class="flex animate-move gap-6 self-start"
            style={{ "--tw-move": "calc(98vw - 100% - 2rem)" }}
          >
            {[
              "Web Development",
              "Open-source Contribution",
              "Frontend",
              "Backend",
              "Testing",
              "API Development",
              "RESPONSIVE",
              "Portfolio",
              "REACT",
              "Qwik",
              "Automation",
              "E-commerce",
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <ul
            class="flex animate-move flex-row-reverse gap-6 self-end"
            style={{ "--tw-move": "calc(-98vw + 100% + 2rem)" }}
          >
            {[
              "Javascript",
              "Typescript",
              "Rust",
              "Springboot",
              "C",
              "C++",
              "C#",
              "Java",
              "Lua",
              "E-commerce",
              "JQuery",
              "Qwik",
              "React js",
              "Next js",
              "Node js",
              "MySQL",
              "Tailwind CSS",
              "Sass",
              "MongoDB",
              "Cypress",
              "Selenium",
              "Playwright",
            ].map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
