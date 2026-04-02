/**
 * Composable for managing document scroll lock
 * Useful for modals and full-screen overlays
 */
export function useDocumentScroll() {
  const toggleScroll = (shouldLock) => {
    if (typeof document === 'undefined') return

    document.body.style.overflow = shouldLock ? 'hidden' : ''
  }

  const lockScroll = () => {
    toggleScroll(true)
  }

  const unlockScroll = () => {
    toggleScroll(false)
  }

  return {
    toggleScroll,
    lockScroll,
    unlockScroll
  }
}
