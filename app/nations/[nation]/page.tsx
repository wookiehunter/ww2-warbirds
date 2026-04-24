import Link from 'next/link';
import { notFound } from 'next/navigation';
import { byNation, nations } from '@/lib/aircraft';
import type { Aircraft } from '@/lib/aircraft';
import AircraftCard from '@/components/AircraftCard';

export function generateStaticParams() {
  return nations.map((n) => ({ nation: n }));
}

export async function generateMetadata({ params }: { params: { nation: string } }) {
  const nation = decodeURIComponent(params.nation) as Aircraft['nation'];
  if (!nations.includes(nation)) return { title: 'Not found' };
  return {
    title: `${nation} — Contrails & Cordite`,
    description: `WWII combat aircraft of ${nation} — fighters, bombers, and more, documented in the dossier.`,
  };
}

const alliedSet = new Set<Aircraft['nation']>(['United Kingdom', 'United States', 'Soviet Union']);

export default function NationPage({ params }: { params: { nation: string } }) {
  const nation = decodeURIComponent(params.nation) as Aircraft['nation'];
  if (!nations.includes(nation)) notFound();

  const list = byNation(nation);
  const side = alliedSet.has(nation) ? 'Allied' : 'Axis';

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <Link href="/aircraft" className="link-vintage font-display uppercase tracking-brutal text-xs text-bone-100/70">
        ← Back to index
      </Link>

      <div className="mt-8">
        <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-2">
          {side} Power
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-bone-50 mb-4">{nation}</h1>
        <p className="text-bone-100/70 max-w-2xl text-lg">
          {list.length} {list.length === 1 ? 'aircraft' : 'aircraft'} from {nation} documented in the dossier.
        </p>
      </div>

      {list.length === 0 ? (
        <div className="mt-12 border border-olive-700/40 p-12 text-center">
          <p className="font-serif text-xl text-bone-100/70">No entries yet.</p>
        </div>
      ) : (
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {list.map((a, i) => (
            <AircraftCard key={a.slug} a={a} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
