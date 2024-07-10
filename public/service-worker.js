/* eslint-disable */
// 添加资源到缓存
async function addResourcesToCache(resources) {
  const cache = await caches.open('v1')
  await cache.addAll(resources)
}

const putInCache = async (request, response) => {
  const cache = await caches.open('v1')
  await cache.put(request, response)
}

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // 首先,尝试从缓存中获取资源
  const responseFromCache = await caches.match(request)
  if (responseFromCache) {
    return responseFromCache
  }
  // 如果缓存中没有资源,则尝试从网络中获取资源
  try {
    const responseFromNetwork = await fetch(request)
    // 响应可能会被使用
    // 我们需要将它的拷贝放入缓存
    // 然后返回该响应
    putInCache(request, responseFromNetwork.clone())
    return responseFromNetwork
  } catch (error) {
    if (fallbackUrl) {
      const fallbackResponse = await caches.match(fallbackUrl)
      if (fallbackResponse) {
        return fallbackResponse
      }
    }

    // 当回落的响应也不可用时，
    // 我们便无能为力了，但我们始终需要
    // 返回 Response 对象
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    })
  }
}

// 启用导航预加载
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable()
  }
}

self.addEventListener('install', (event) => {
  console.log('Service worker installed')
  self.skipWaiting()
})
self.addEventListener('activate', (event) => {
  console.log('Service worker activated')
  event.waitUntil(enableNavigationPreload())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: '',
    })
  )
})
const deleteCache = async (key) => {
  await caches.delete(key)
}

const deleteOldCaches = async () => {
  const cacheKeepList = ['v2']
  const keyList = await caches.keys()
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key))
  await Promise.all(cachesToDelete.map(deleteCache))
}

self.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCaches())
})
