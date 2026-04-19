import Link from 'next/link';
import { notFound } from 'next/navigation';
import { aircraft, getAircraftBySlug, allSlugs } from '@/lib/aircraft';
import AircraftCard from '@/components/AircraftCard';
import SafeImage from '@/components/SafeImage';

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const a = getAircraftBySlug(params.slug);
  if (!a) return { title: 'Not found' };
  return {
    title: `${a.name} — Contrails & Cordite`,
    description: a.tagline,
  };
}

export default function AircraftDetail({ params }: { params: { slug: string } }) {
  const a = getAircraftBySlug(params.slug);
  if (!a) notFound();

  const related = aircraft
    .filter((x) => x.slug !== a.slug && (x.nation === a.nation || x.tags.some((t) => a.tags.includes(t))))
    .slice(0, 4);

  const specs: [string, string][] = [
    ['Manufacturer', a.manufacturer],
    ['First flight', a.firstFlight],
    ['In service', a.inService],
    ['Total produced', a.produced],
    ['Crew', a.crew],
    ['Powerplant', a.engine],
    ['Maximum speed', a.maxSpeed],
    ['Service ceiling', a.ceiling],
    ['Range', a.range],
    ['Armament', a.armament],
  ];

  return (
    <article>
      {/* HERO */}
      <section className="relative border-b border-olive-700/60">
        <div className="absolute inset-0">
          <SafeImage src={a.image} alt="" className="w-full h-full object-cover img-treatment" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <Link href="/aircraft" className="link-vintage font-display uppercase tracking-brutal text-xs text-bone-100/70">
            ← Back to index
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="stamp text-brass-400">{a.nation}</span>
            <span className="stamp text-rust-500">{a.role.split(' / ')[0]}</span>
            {a.tags.slice(0, 2).map((t) => (
              <span key={t} className="stamp text-bone-100/70">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 font-mono text-xs text-bone-100/60 uppercase tracking-wider">
            {a.manufacturer} · {a.designation}
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-bone-50 mt-2 leading-[0.95] max-w-5xl">
            {a.name}
          </h1>

          <p className="mt-6 text-xl md:text-2xl italic font-serif text-brass-400 max-w-3xl leading-snug">
            {a.tagline}
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-3">
              § Summary
            </div>
            <p className="font-serif text-xl leading-relaxed text-bone-50">{a.summary}</p>
          </div>

          <div>
            <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-3">
              § Service History
            </div>
            <div className="space-y-5 text-bone-100/85 leading-relaxed text-[1.05rem]">
              {a.history.map((p, i) => (
                <p key={i}>
                  <span className="font-display text-brass-400 mr-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Image panel */}
          <figure className="border border-olive-700/60 corner-mark">
            <SafeImage src={a.image} alt={a.name} className="w-full img-treatment" />
            <figcaption className="bg-ink-900/80 px-4 py-3 text-xs font-mono text-bone-100/60 uppercase tracking-wider border-t border-olive-700/40">
              {a.name} — {a.imageCredit}
            </figcaption>
          </figure>

          <div>
            <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-3">
              § Theatres & Operators
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-serif text-lg text-bone-50 mb-2">Theatres of operation</h4>
                <ul className="space-y-1 text-bone-100/80">
                  {a.theaters.map((t) => (
                    <li key={t} className="font-mono text-sm">
                      <span className="text-brass-400 mr-2">·</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-lg text-bone-50 mb-2">Principal operators</h4>
                <ul className="space-y-1 text-bone-100/80">
                  {a.notableOperators.map((o) => (
                    <li key={o} className="font-mono text-sm">
                      <span className="text-brass-400 mr-2">·</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="border border-olive-700/60 bg-ink-900/60 p-6 corner-mark">
            <div className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-4 pb-3 border-b border-olive-700/40">
              Technical Data
            </div>
            <dl className="space-y-3">
              {specs.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] font-display uppercase tracking-brutal text-bone-100/50">
                    {k}
                  </dt>
                  <dd className="text-sm text-bone-50 font-mono leading-snug mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16 border-t border-olive-700/50">
          <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-3">
            § Related Aircraft
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-bone-50 mb-8">
            Others in the same fight.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r, i) => (
              <AircraftCard key={r.slug} a={r} index={i} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
