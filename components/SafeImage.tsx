'use client';

import { useState, useEffect, useCallback } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  /**
   * Wikipedia article slug (e.g. "Supermarine_Spitfire").
   * When the primary src fails, SafeImage calls the Wikipedia REST API:
   *   https://en.wikipedia.org/api/rest_v1/page/summary/<wikiSlug>
   * which always returns a confirmed, working thumbnail URL.
   */
  wikiSlug?: string;
};

const PLACEHOLDER = '/placeholder.svg';
const WIKI_API    = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

async function fetchWikiThumbnail(slug: string): Promise<string | null> {
  try {
    const res = await fetch(`${WIKI_API}${encodeURIComponent(slug)}`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    const data = await res.json();
    // Prefer originalimage for high-res; fall back to thumbnail
    return data?.originalimage?.source ?? data?.thumbnail?.source ?? null;
  } catch {
    return null;
  }
}

/**
 * SafeImage — drop-in <img> with a three-tier fallback:
 *
 *  Tier 1  src (primary URL, usually Wikimedia Special:FilePath)
 *  Tier 2  Wikipedia REST API thumbnail  (when wikiSlug provided)
 *  Tier 3  /placeholder.svg  (always available locally)
 */
export default function SafeImage({
  src,
  alt,
  className,
  loading = 'lazy',
  wikiSlug,
}: Props) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setStage(0);
    setBusy(false);
  }, [src]);

  const handleError = useCallback(async () => {
    if (busy) return;

    if (stage === 0 && wikiSlug) {
      setBusy(true);
      const url = await fetchWikiThumbnail(wikiSlug);
      setBusy(false);
      if (url) {
        setCurrentSrc(url);
        setStage(1);
        return;
      }
      // Wikipedia lookup also failed
      setCurrentSrc(PLACEHOLDER);
      setStage(2);
      return;
    }

    // stage 0 with no wikiSlug, or stage 1 CDN URL failed
    setCurrentSrc(PLACEHOLDER);
    setStage(2);
  }, [stage, wikiSlug, busy]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      decoding="async"
    />
  );
}
