import { component$, type JSXOutput } from "@builder.io/qwik";
import {
  SimpleIconsFacebook,
  SimpleIconsGithub,
  SimpleIconsInstagram,
  SimpleIconsLinkedin,
  SimpleIconsX,
  SimpleIconsYoutube,
} from "../icon/icon";
import SocialLink from "./social-link";

const socials = {
  linkedin: "https://www.linkedin.com/in/binhtran432k",
  github: "https://github.com/binhtran432k",
  instagram: undefined,
  x: "https://twitter.com/binhtran432k",
  facebook: "https://www.facebook.com/binhtran432k",
  youtube: "https://www.youtube.com/@binhtran432k",
} as const;

export default component$(() => {
  return (
    <ul class="container m-auto flex flex-wrap justify-center gap-4 px-2 py-4">
      {(
        [
          ["Linkedin", socials.linkedin, SimpleIconsLinkedin],
          ["Github", socials.github, SimpleIconsGithub],
          ["Instagram", socials.instagram, SimpleIconsInstagram],
          ["X", socials.x, SimpleIconsX],
          ["Facebook", socials.facebook, SimpleIconsFacebook],
          ["Youtube", socials.youtube, SimpleIconsYoutube],
        ] as [string, string, () => JSXOutput][]
      )
        .filter(([, x]) => Boolean(x))
        .map(([label, href, Icon]) => (
          <li key={label} class="text-3xl">
            <SocialLink label={label} href={href} icon={<Icon />} />
          </li>
        ))}
    </ul>
  );
});
