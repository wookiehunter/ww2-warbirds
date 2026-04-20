'use client';

import { useState, useEffect, useCallback } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
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
    return data?.originalimage?.source ?? data?.thumbnail?.source ?? null;
  } catch {
    return null;
  }
}

export default function SafeImage({ src, alt, className, loading = 'lazy', wikiSlug }: Props) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [stage, setStage]           = useState<0 | 1 | 2>(0);
  const [busy, setBusy]             = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setStage(0);
    setBusy(false);
  }, [src]);

  const handleError = useCallback(async () => {
    // Stage 2 = placeholder is already showing; do nothing further.
    if (stage === 2 || busy) return;

    if (stage === 0 && wikiSlug) {
      setBusy(true);
      const url = await fetchWikiThumbnail(wikiSlug);
      setBusy(false);
      if (url) {
        setCurrentSrc(url);
        setStage(1);
        return;
      }
    }

    // Tier 3: local placeholder — guaranteed to be present in /public
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
