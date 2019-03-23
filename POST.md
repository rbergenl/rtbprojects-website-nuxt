# Why SSR?
Its for SEO. A search bot will come to your page example.com/ and reads the <title> and <meta> tags.
With a SPA and using a router to display different content at different urls; still, the search bot
will come to the "single page".

With SSR, the bot gets served a unique page for each different url, with its own unique <title> and <meta> tags
to describe the page. Now, the bot understand each page!

# How to set it up?
The easiest way I found to host a SSR website in an actual production environment was VueJs's Nuxt on Google's Firebase.


On the command line run firebase use --add and select the Firebase project you have created.
