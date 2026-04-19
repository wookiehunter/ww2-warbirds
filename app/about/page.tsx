import Link from 'next/link'

export const metadata = {
  title: 'About — Contrails & Cordite',
  description: 'About this dossier of WWII aircraft.',
}

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative border-b border-olive-800/60 bg-ink-950">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/B-17_formation_over_Schweinfurt,_17_August_1943.jpg?width=1600"
            alt=""
            className="w-full h-full object-cover img-treatment"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/80 to-ink-950" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-4">
            § Volume VI — Colophon
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-bone-50 mb-6 leading-tight">
            About the Dossier
          </h1>
          <p className="text-bone-100/80 text-lg md:text-xl leading-relaxed max-w-2xl">
            A field guide to the machines that contested the skies between 1939 and 1945 — compiled
            for enthusiasts, modellers, and the merely curious.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="corner-mark border border-olive-700/60 bg-ink-900/60 p-8 md:p-12 mb-12">
          <div className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-4">
            01 — Purpose
          </div>
          <p className="text-bone-100/80 leading-relaxed mb-4">
            <span className="font-serif text-2xl text-bone-50 italic">Contrails &amp; Cordite</span>{' '}
            is an enthusiast project — a reference dossier cataloguing thirty-two of the most
            consequential warplanes of the Second World War. Each entry pairs technical
            specification with a compact operational history, cross-referenced against theatre,
            operator nation, and contemporaries.
          </p>
          <p className="text-bone-100/80 leading-relaxed">
            It is not exhaustive. It is opinionated. Omissions are deliberate; inclusions are
            earned.
          </p>
        </div>

        <div className="corner-mark border border-olive-700/60 bg-ink-900/60 p-8 md:p-12 mb-12">
          <div className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-4">
            02 — Sources
          </div>
          <p className="text-bone-100/80 leading-relaxed mb-4">
            Photographic material is drawn from the public domain via Wikimedia Commons, the
            Imperial War Museums (IWM), the U.S. National Archives (NARA), and the
            Bundesarchiv. Technical specifications are cross-checked against standard references
            including Jane&rsquo;s <em>All the World&rsquo;s Aircraft</em>, William Green&rsquo;s{' '}
            <em>Warplanes of the Second World War</em>, and manufacturer&rsquo;s data where
            available.
          </p>
          <p className="text-bone-100/80 leading-relaxed">
            Where figures conflict between sources, we&rsquo;ve favoured the consensus published by
            museum archives over wartime propaganda or post-war claims.
          </p>
        </div>

        <div className="corner-mark border border-olive-700/60 bg-ink-900/60 p-8 md:p-12 mb-12">
          <div className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-4">
            03 — A Note on Images
          </div>
          <p className="text-bone-100/80 leading-relaxed mb-4">
            Aircraft photographs are loaded via Wikimedia Commons&rsquo; stable{' '}
            <code className="font-mono text-sm text-brass-400 bg-ink-950 px-2 py-0.5">
              Special:FilePath
            </code>{' '}
            endpoint. If a specific image fails to resolve, the filename can be swapped in{' '}
            <code className="font-mono text-sm text-brass-400 bg-ink-950 px-2 py-0.5">
              lib/aircraft.ts
            </code>{' '}
            — any direct image URL will render without reconfiguration.
          </p>
          <p className="text-bone-100/80 leading-relaxed">
            The treatment applied to images (a modest sepia and contrast push) is stylistic. The
            originals, in their full fidelity, remain one click away at the source.
          </p>
        </div>

        <div className="corner-mark border border-olive-700/60 bg-ink-900/60 p-8 md:p-12 mb-12">
          <div className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-4">
            04 — Technical
          </div>
          <p className="text-bone-100/80 leading-relaxed mb-4">
            Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Typography courtesy
            of Oswald, Playfair Display, Inter, and JetBrains Mono via Google Fonts. No client-side
            state beyond the filter controls on the aircraft index.
          </p>
          <p className="text-bone-100/80 leading-relaxed">
            The site is statically generated — every aircraft detail page is pre-rendered at build
            time. It will run anywhere Next.js runs.
          </p>
        </div>

        <div className="corner-mark border border-olive-700/60 bg-ink-900/60 p-8 md:p-12 mb-12">
          <div className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-4">
            05 — Acknowledgements
          </div>
          <p className="text-bone-100/80 leading-relaxed mb-4">
            To the archivists at the IWM, NARA, and the Bundesarchiv; to the volunteers who have
            tagged, captioned, and catalogued tens of thousands of wartime photographs on Wikimedia
            Commons; and to the warbird preservation community keeping these machines airworthy —
            this project stands on your shoulders.
          </p>
          <p className="text-bone-100/80 leading-relaxed">
            And to the crews, ground and air, whose labour and losses these pages only dimly
            reflect.
          </p>
        </div>

        {/* Sign-off */}
        <div className="text-center py-12 border-t border-olive-800/60">
          <div className="divider-stars mb-6" />
          <p className="font-serif text-2xl text-bone-50 italic mb-2">Lest we forget.</p>
          <p className="font-mono text-xs text-brass-400 uppercase tracking-wider">
            — The Editors
          </p>
        </div>

        <div className="flex gap-4 justify-center mt-12">
          <Link
            href="/aircraft"
            className="font-display uppercase tracking-brutal text-sm text-ink-950 bg-brass-400 hover:bg-brass-300 px-6 py-3 transition-colors"
          >
            Browse the Fleet →
          </Link>
          <Link
            href="/"
            className="font-display uppercase tracking-brutal text-sm text-brass-400 border border-brass-400/60 hover:bg-brass-400/10 px-6 py-3 transition-colors"
          >
            ← Home
          </Link>
        </div>
      </section>
    </div>
  )
}
