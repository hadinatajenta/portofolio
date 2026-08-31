import crypto from 'node:crypto'
import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const PORT = Number(process.env.PORT || 3001)

const withMeta = (requestId = null) => ({
  timestamp: new Date().toISOString(),
  request_id: requestId ?? crypto.randomUUID()
})

const sendError = (res, code, message, errors = null) => {
  const rawJsonp = res.locals.rawJsonp || res.jsonp.bind(res)
  res.status(code)
  rawJsonp({
    success: false,
    code,
    message,
    data: null,
    errors,
    meta: withMeta(res.locals.requestId)
  })
}

const successMessageByMethod = {
  GET: 'Data retrieved successfully',
  POST: 'Data created successfully',
  PUT: 'Data updated successfully',
  PATCH: 'Data updated successfully',
  DELETE: 'Data deleted successfully'
}

server.use((req, res, next) => {
  res.locals.requestId = req.get('x-request-id') || crypto.randomUUID()
  res.locals.rawJsonp = res.jsonp.bind(res)
  next()
})

server.use(middlewares)
server.use(jsonServer.bodyParser)

// Example error endpoints matching the requested contract.
server.get('/errors/400', (_, res) => {
  sendError(res, 400, 'Invalid request', [
    { field: 'email', message: 'Email is required' },
    { field: 'password', message: 'Password must be at least 8 characters' }
  ])
})

server.get('/errors/404', (_, res) => {
  sendError(res, 404, 'Resource not found')
})

server.get('/errors/500', (_, res) => {
  sendError(res, 500, 'Internal server error', [
    { message: 'Unexpected error occurred' }
  ])
})

server.use((req, res, next) => {
  const originalJsonp = res.jsonp.bind(res)

  res.jsonp = (payload) => {
    const statusCode = res.statusCode || 200
    const isSuccess = statusCode >= 200 && statusCode < 300

    if (!isSuccess) {
      const errors = Array.isArray(payload?.errors)
        ? payload.errors
        : statusCode >= 500
          ? [{ message: 'Unexpected error occurred' }]
          : null

      return sendError(
        res,
        statusCode,
        payload?.message || (statusCode === 404 ? 'Resource not found' : 'Request failed'),
        errors
      )
    }

    return originalJsonp({
      success: true,
      code: statusCode,
      message: successMessageByMethod[req.method] || 'Request successful',
      data: payload ?? null,
      errors: null,
      meta: withMeta(res.locals.requestId)
    })
  }

  next()
})

server.use(router)

// Fallback 404 for non-existing routes.
server.use((_, res) => {
  sendError(res, 404, 'Resource not found')
})

server.listen(PORT, () => {
  console.log(`JSON Server running at http://localhost:${PORT}`)
})
