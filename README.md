# Binh Duc Tran Portfolio Project

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

This project is a personal portfolio website built using Perseus, a
high-performance Rust-based web framework. It showcases my skills and
experience in web development.

---

## Features

- **Clean and responsive design**: The website adapts seamlessly to different
  screen sizes, ensuring a great user experience across devices
- **Interactive elements**: The portfolio may include elements like smooth
  animations, interactive components, or micro-interactions to enhance user
  engagement
- **Project highlights**: Each project is presented with a clear description,
  relevant technologies used, and potentially links to live demos or source
  code
- **Contact information**: Provides an easy way for potential employers or
  collaborators to reach out

## Technologies

- **Frontend**: Qwik/QwikCity
- **Styling**: TailwindCSS
- **Deployment**: GitHub Pages (static site hosting)

## Live demo

- [binhtran432k.com](https://binhtran432k.com)

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory-based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Add Integrations and deployment

Use the `bun qwik add` command to add additional integrations. Some examples of integrations includes: Cloudflare, Netlify or Express Server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).

```shell
bun qwik add # or `bun qwik add`
```

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
npm start # or `bun start`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
bun preview # or `bun preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
bun build # or `bun build`
```

## Static Site Generator

```shell
bun run build.server
```

## Contributing

This project is currently not intended for external
contributions. However, feel free to reach out if you have any
suggestions or feedback!

## Author

- Binh Duc Tran: [binhtran432k.com](https://binhtran432k.com)
