# Why SSR?
Its for SEO. A search bot will come to your page example.com/ and reads the `<title>` and `<meta>` tags.
With a SPA and using a router to display different content at different urls; still, the search bot
will come to the "single page".

With SSR, the bot gets served a unique page for each different url, with its own unique `<title>` and `<meta>` tags
to describe the page. Now, the bot understand each page!

# How to set it up?
The easiest way I found to host a SSR website in an actual production environment was VueJs's Nuxt on Google's Firebase.


On the command line run firebase use --add and select the Firebase project you have created.





# Steps
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
