import Link from 'next/link';
import type { Aircraft } from '@/lib/aircraft';
import SafeImage from '@/components/SafeImage';

export default function AircraftCard({ a, index = 0 }: { a: Aircraft; index?: number }) {
  return (
    <Link
      href={`/aircraft/${a.slug}`}
      className="group block border border-olive-700/60 bg-ink-900/60 hover:border-brass-400/70 transition-colors relative corner-mark"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-ink-800">
        <SafeImage
          src={a.image}
          alt={a.name}
          className="w-full h-full object-cover img-treatment transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="stamp text-brass-400">{a.nation}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="text-xs font-mono text-bone-300/50 uppercase tracking-wider mb-1">
          {a.manufacturer}
        </div>
        <h3 className="font-serif text-xl text-bone-50 group-hover:text-brass-400 transition-colors leading-tight">
          {a.name}
        </h3>
        <p className="text-xs text-bone-100/50 mt-1 font-mono">{a.designation}</p>

        <div className="mt-4 pt-4 border-t border-olive-700/40 flex items-center justify-between gap-3">
          <span className="text-xs uppercase tracking-brutal text-olive-500 font-display">
            {a.role.split(' / ')[0]}
          </span>
          <span className="text-xs text-bone-100/50 font-mono">{a.inService}</span>
        </div>
      </div>
    </Link>
  );
}
