import { useEffect, useState } from 'react'
import { sanityClient, isSanityConfigured } from '../lib/sanityClient'

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Fills in any null/missing keys on a fetched singleton document (e.g.
 * siteSettings) with the matching fallback value, so a partially-filled
 * Sanity document (real contact info, but no hero image yet) doesn't blank
 * out the fields nobody's gotten around to setting.
 */
function mergeWithFallback(result, fallback) {
  if (!isPlainObject(result) || !isPlainObject(fallback)) return result
  const merged = { ...fallback }
  for (const key of Object.keys(result)) {
    if (result[key] != null) merged[key] = result[key]
  }
  return merged
}

/**
 * Fetches `query` (with optional `params`) from Sanity and falls back to
 * `fallback` if Sanity isn't configured, the request fails, or it resolves
 * to null/undefined/empty-array. This is what keeps every page rendering
 * correctly before a real Sanity project exists — see the "known issue" in
 * the README that this is deliberately guarding against.
 */
export function useSanityData(query, fallback, params = {}) {
  const [state, setState] = useState({
    data: fallback,
    loading: isSanityConfigured,
    isFallback: !isSanityConfigured,
  })

  useEffect(() => {
    if (!isSanityConfigured) return

    let cancelled = false

    sanityClient
      .fetch(query, params)
      .then((result) => {
        if (cancelled) return
        const isEmpty = result == null || (Array.isArray(result) && result.length === 0)
        setState({
          data: isEmpty ? fallback : mergeWithFallback(result, fallback),
          loading: false,
          isFallback: isEmpty,
        })
        if (isEmpty) {
          console.warn('[sanity] Query returned no data, using fallback content:', query)
        }
      })
      .catch((error) => {
        if (cancelled) return
        console.warn('[sanity] Query failed, using fallback content:', error)
        setState({ data: fallback, loading: false, isFallback: true })
      })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, JSON.stringify(params)])

  return state
}
