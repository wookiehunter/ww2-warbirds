'use client';

import { useMemo, useState } from 'react';
import { aircraft, nations } from '@/lib/aircraft';
import AircraftCard from '@/components/AircraftCard';

const ALL = 'All';

type Side = 'All' | 'Allied' | 'Axis';

const alliedSet = new Set(['United Kingdom', 'United States', 'Soviet Union']);

export default function AircraftIndex() {
  const [nation, setNation] = useState<string>(ALL);
  const [side, setSide] = useState<Side>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return aircraft.filter((a) => {
      if (nation !== ALL && a.nation !== nation) return false;
      if (side === 'Allied' && !alliedSet.has(a.nation)) return false;
      if (side === 'Axis' && alliedSet.has(a.nation)) return false;
      if (query) {
        const q = query.toLowerCase();
        const hay = [a.name, a.designation, a.role, a.manufacturer, ...a.tags].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [nation, side, query]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-3">
        § Volume I — The Index
      </div>
      <h1 className="font-serif text-5xl md:text-6xl text-bone-50 mb-4">Aircraft Dossier</h1>
      <p className="text-bone-100/70 max-w-3xl text-lg">
        Every entry documented here saw combat service during the Second World War.
        Use the filters below to narrow by nation, by side, or by free-text search across
        designations, roles, and manufacturers.
      </p>

      {/* Filters */}
      <div className="mt-10 grid md:grid-cols-3 gap-4 border-y border-olive-700/50 py-6">
        <div>
          <label className="block font-display uppercase tracking-brutal text-xs text-brass-400 mb-2">
            Side
          </label>
          <div className="flex gap-2">
            {(['All', 'Allied', 'Axis'] as Side[]).map((s) => (
              <button
                key={s}
                onClick={() => setSide(s)}
                className={`px-3 py-2 text-xs font-display uppercase tracking-brutal border transition-colors ${
                  side === s
                    ? 'border-brass-400 text-brass-400 bg-olive-800/40'
                    : 'border-olive-700/60 text-bone-100/60 hover:border-bone-100/60'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-display uppercase tracking-brutal text-xs text-brass-400 mb-2">
            Nation
          </label>
          <select
            value={nation}
            onChange={(e) => setNation(e.target.value)}
            className="w-full bg-ink-900 border border-olive-700/60 text-bone-50 px-3 py-2 font-mono text-sm focus:outline-none focus:border-brass-400"
          >
            <option value={ALL}>All nations</option>
            {nations.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-display uppercase tracking-brutal text-xs text-brass-400 mb-2">
            Search
          </label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Mustang, dive bomber, Merlin…"
            className="w-full bg-ink-900 border border-olive-700/60 text-bone-50 px-3 py-2 font-mono text-sm placeholder:text-bone-100/30 focus:outline-none focus:border-brass-400"
          />
        </div>
      </div>

      <div className="mt-6 mb-8 flex items-center justify-between">
        <p className="text-sm font-mono text-bone-100/50">
          {filtered.length} of {aircraft.length} aircraft
        </p>
        {(nation !== ALL || side !== 'All' || query) && (
          <button
            onClick={() => {
              setNation(ALL);
              setSide('All');
              setQuery('');
            }}
            className="text-xs font-display uppercase tracking-brutal text-rust-500 hover:text-brass-400"
          >
            Clear filters ×
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="border border-olive-700/40 p-12 text-center">
          <p className="font-serif text-xl text-bone-100/70">No matches.</p>
          <p className="text-sm text-bone-100/50 mt-2 font-mono">
            Try broadening your filters or clearing the search.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((a, i) => (
            <AircraftCard key={a.slug} a={a} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
