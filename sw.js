if(!self.define){let e,n={};const s=(s,t)=>(s=new URL(s+".js",t).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(n[i])return;let r={};const c=e=>s(e,i),u={module:{uri:i},exports:r,require:c};n[i]=Promise.all(t.map((e=>u[e]||c(e)))).then((e=>(o(...e),r)))}}define(["./workbox-33e125de"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"manifest.webmanifest",revision:"bbd8b6cb4616189dfbe2439be7fd1805"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(js|css|json|ico|png|svg|jpg|jpeg|webp)(\?|$)/,new e.NetworkFirst({networkTimeoutSeconds:5,cacheName:"StaticResource",plugins:[new e.ExpirationPlugin({maxEntries:500,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
