if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>n(e,t),u={module:{uri:t},exports:o,require:d};s[t]=Promise.all(i.map((e=>u[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-33e125de"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"192x192.png",revision:"26df4d2e359259614dac9557e87fe206"},{url:"512x512.png",revision:"35d10d1f2d9359bf56a599e00d272572"},{url:"assets/FENav-BqdMTkf1.js",revision:null},{url:"assets/index-DIj4npU0.css",revision:null},{url:"assets/index-DuMWxCZ6.js",revision:null},{url:"registerSW.js",revision:"756d5b68287df149e009fa131977e703"},{url:"manifest.webmanifest",revision:"bbd8b6cb4616189dfbe2439be7fd1805"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(js|css|json|ico|png|svg|jpg|jpeg|webp)(\?|$)/,new e.NetworkFirst({networkTimeoutSeconds:5,cacheName:"StaticResource",plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
