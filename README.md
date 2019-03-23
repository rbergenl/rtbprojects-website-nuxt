# rtbprojects-website-nuxt

> My cool Nuxt.js project

## Getting started
$ npm install -g firebase-tools
$ mkdir <project>
$ firebase init (only functions and hosting, not typescript, no lint)
Try firebase serve --only hosting,functions
Maybe add a .firebaserc file with { "projects": { "default": "<project>" } }

$ (outside the project directory) npx create <project> (no jest, no prettier, no custom server)
$ mv <src folders> src
modify nuxt.config.js (build {publicPath: '/assets/',} and srcDir: 'src',)
Also modify the 'head' title, meta description, link
Try npm run dev, and npm run build and npm run start.


$ Modify functions/index.js and $ cd functions && npm install nuxt express; and add "engines": {"node": "8"} to functions/package.json
Modify package.json (change 'build' into 'build:nuxt')
```
"build": "npm run clean;npm run build:nuxt;npm run copy # for Firebase",
"clean": "rm -rf {dist,.nuxt}",
"copy": "mkdir dist;cp -R functions dist/server;cp -R src/static/ dist/client;cp -R .nuxt dist/server;cp -R dist/server/.nuxt/dist dist/client/assets"
```

Modify firebase.json
```
hosting: {
  "public": "dist/client",
  "rewrites": [
    {
      "source": "**",
      "function": "ssr"
    }
  ]
},
"functions": {
  "source": "dist/server"
}
```
$ npm run build
$ firebase serve --only hosting,functions

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
