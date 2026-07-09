import { useEffect, useState } from 'react'
import { sanityClient, isSanityConfigured } from '../lib/sanityClient'

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
          data: isEmpty ? fallback : result,
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
