import Link from 'next/link';
import { aircraft, nations, byNation } from '@/lib/aircraft';
import AircraftCard from '@/components/AircraftCard';
import SafeImage from '@/components/SafeImage';

const featured = ['supermarine-spitfire', 'p-51-mustang', 'messerschmitt-bf-109', 'mitsubishi-a6m-zero'];

export default function Home() {
  const featuredAircraft = featured.map((s) => aircraft.find((a) => a.slug === s)!);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-olive-700/60">
        <div className="absolute inset-0 opacity-40">
          <SafeImage
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Supermarine_Spitfire_Mk_Vb_of_92_Sqn_flown_by_Geoffrey_Wellum_1941.jpg?width=1800"
            alt=""
            className="w-full h-full object-cover img-treatment"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 md:pt-32 md:pb-40">
          <div className="stamp text-rust-500 mb-6 inline-block animate-fade">
            Classified · Field Dossier · 1939 – 1945
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-bone-50 max-w-5xl animate-rise">
            The aircraft that
            <br />
            <em className="text-brass-400">decided the sky</em>
            <br />
            above a burning world.
          </h1>

          <p
            className="mt-8 max-w-2xl text-bone-100/80 text-lg leading-relaxed animate-rise"
            style={{ animationDelay: '0.2s' }}
          >
            A field guide to the fighters, bombers, and dive bombers of the Second World War —
            their engineers, their crews, their engines and armament, and the theatres where they
            fought. Compiled for enthusiasts of aviation history.
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4 animate-rise"
            style={{ animationDelay: '0.4s' }}
          >
            <Link
              href="/aircraft"
              className="inline-flex items-center gap-3 bg-brass-400 text-ink-950 px-6 py-3 font-display tracking-brutal uppercase text-sm hover:bg-bone-50 transition-colors"
            >
              Open the Dossier
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/timeline"
              className="inline-flex items-center gap-3 border border-bone-100/30 text-bone-100 px-6 py-3 font-display tracking-brutal uppercase text-sm hover:border-brass-400 hover:text-brass-400 transition-colors"
            >
              View the Timeline
            </Link>
          </div>

          {/* stat strip */}
          <div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-olive-700/50 pt-8 max-w-4xl animate-rise"
            style={{ animationDelay: '0.6s' }}
          >
            {[
              { v: '32', l: 'Aircraft in the dossier' },
              { v: '6', l: 'Combatant nations' },
              { v: '5', l: 'Theatres of war' },
              { v: '≈ 800,000', l: 'Combat aircraft built' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl text-brass-400">{s.v}</div>
                <div className="text-xs uppercase tracking-brutal text-bone-100/50 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-2">
              § 01 — Principal Combatants
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-bone-50">Four fighters, four flags.</h2>
          </div>
          <Link href="/aircraft" className="link-vintage font-display uppercase tracking-brutal text-sm text-bone-100/80">
            Full index →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAircraft.map((a, i) => (
            <AircraftCard key={a.slug} a={a} index={i} />
          ))}
        </div>
      </section>

      {/* ── BY NATION ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-2">
          § 02 — By Combatant Nation
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-bone-50 mb-12">
          Allied & Axis <em className="text-brass-400">rosters.</em>
        </h2>

        <div className="space-y-16">
          {nations.map((nation) => {
            const list = byNation(nation);
            if (list.length === 0) return null;
            return (
              <div key={nation}>
                <div className="flex items-baseline justify-between mb-5 border-b border-olive-700/50 pb-3">
                  <h3 className="font-serif text-2xl text-bone-50">{nation}</h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-bone-100/50">
                    {list.length} {list.length === 1 ? 'entry' : 'entries'}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {list.map((a, i) => (
                    <AircraftCard key={a.slug} a={a} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <div className="divider-stars mb-10">
          <span className="font-display uppercase tracking-brutal text-xs">In Memoriam</span>
        </div>
        <blockquote className="font-serif italic text-2xl md:text-3xl text-bone-50 leading-snug">
          &ldquo;Never in the field of human conflict was so much owed by so many to so few.&rdquo;
        </blockquote>
        <cite className="block mt-6 not-italic font-display uppercase tracking-brutal text-xs text-brass-400">
          — Winston S. Churchill, 20 August 1940
        </cite>
      </section>
    </div>
  );
}
