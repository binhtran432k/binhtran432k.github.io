import { type JSXNode, component$ } from "@builder.io/qwik";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "@qwikest/icons/simpleicons";
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
          ["Linkedin", socials.linkedin, SiLinkedin],
          ["Github", socials.github, SiGithub],
          ["Instagram", socials.instagram, SiInstagram],
          ["X", socials.x, SiX],
          ["Facebook", socials.facebook, SiFacebook],
          ["Youtube", socials.youtube, SiYoutube],
        ] as [string, string, (props: any) => JSXNode][]
      )
        .filter(([, x]) => Boolean(x))
        .map(([label, href, Icon]) => (
          <li key={label} class="text-3xl">
            <SocialLink
              label={label}
              href={href}
              icon={(<Icon />) as JSXNode}
            />
          </li>
        ))}
    </ul>
  );
});
