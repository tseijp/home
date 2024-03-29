# 👀home

<div align="center">
  <h6>
    home page in
    <a href="https://tsei.jp/">tsei.jp</a>
  </h6>
  <a href="https://tsei.jp/">
    <img alt="👀" width="600px" src="https://i.imgur.com/Qk3OD3R.gif" />
  </a>
</div>

## Getting Started

This website is built using [Docusaurus 2](https://docusaurus.io/),
a modern static website generator.

### Installation

```bash
git clone https://github.com/tseijp/home
cd home
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory
and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
