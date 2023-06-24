# Home

Very simple homepage for displaying selfhosted apps.

## Setup

> This project uses nodejs 18.x.x in development

Install dependencies

```bash
npm i
```

## Development

Create a config.json under `public/data` and then run: 

```bash
npm run dev
```

An example config file exists on `public/data/config.example.json`.

## Deploy

Just serve the public folder.

## Release

```bash
npm version [major | minor | patch] -m "Release v%s"

git push origin main --tags
```
