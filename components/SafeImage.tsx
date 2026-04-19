'use client';

import { useState, useEffect } from 'react';

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  /** Optional additional fallback URL tried before the local placeholder. */
  fallbackSrc?: string;
};

const PLACEHOLDER = '/placeholder.svg';

/**
 * Drop-in replacement for <img> that gracefully handles image load failures.
 *
 * Order of attempts:
 *   1. `src`
 *   2. `fallbackSrc` (if provided)
 *   3. `/placeholder.svg` (local, always works)
 *
 * The final fallback is the bundled dossier-style placeholder so broken
 * remote images never leave the user looking at a broken-image icon.
 */
export default function SafeImage({
  src,
  alt,
  className,
  loading = 'lazy',
  fallbackSrc,
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [stage, setStage] = useState<0 | 1 | 2>(0); // 0: primary, 1: fallback, 2: placeholder

  // If the src prop changes (e.g. navigating between detail pages), reset.
  useEffect(() => {
    setCurrentSrc(src);
    setStage(0);
  }, [src]);

  const handleError = () => {
    if (stage === 0 && fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setStage(1);
      return;
    }
    if (stage < 2) {
      setCurrentSrc(PLACEHOLDER);
      setStage(2);
    }
    // If the placeholder itself failed (shouldn't happen), stop trying.
  };

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
