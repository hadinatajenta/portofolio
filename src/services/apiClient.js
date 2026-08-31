const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001').replace(/\/$/, '')

function buildUrl(path) {
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

function getFallbackMessage(status) {
  if (status === 404) return 'Resource not found'
  if (status >= 500) return 'Internal server error'
  return 'Request failed'
}

export async function apiGet(path, init = {}) {
  const response = await fetch(buildUrl(path), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ...(init.headers || {})
    },
    ...init
  })

  let payload = null
  try {
    payload = await response.json()
  } catch {
    throw new Error(`Invalid JSON response from ${buildUrl(path)}`)
  }

  const hasEnvelope = payload && typeof payload === 'object' && 'success' in payload

  if (hasEnvelope) {
    if (!payload.success) {
      const message = payload.message || getFallbackMessage(payload.code || response.status)
      const error = new Error(message)
      error.code = payload.code || response.status
      error.errors = payload.errors || null
      error.meta = payload.meta || null
      throw error
    }

    return payload.data
  }

  if (!response.ok) {
    const error = new Error(getFallbackMessage(response.status))
    error.code = response.status
    throw error
  }

  return payload
}

export const apiConfig = {
  baseUrl: API_BASE_URL
}
