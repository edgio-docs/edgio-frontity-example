const { Router } = require('@edgio/core/router')
const { frontityRoutes } = require('@edgio/frontity')

const PAGE_CACHE_TTL = {
  edge: {
    maxAgeSeconds: 24 * 60 * 60,
  },
}

module.exports = new Router()
  .get('/', ({ cache }) => cache(PAGE_CACHE_TTL))
  .get('/about-us', ({ cache }) => cache(PAGE_CACHE_TTL))
  .get('/tag/:path*', ({ cache }) => cache(PAGE_CACHE_TTL))
  .get('/category/:path*', ({ cache }) => cache(PAGE_CACHE_TTL))
  .use(frontityRoutes)
