import { aircraft } from '@/lib/aircraft';
import AircraftFilters from '@/components/AircraftFilters';

export const metadata = {
  title: 'Aircraft Dossier — Contrails & Cordite',
  description:
    'Every aircraft that saw combat in the Second World War — filter by nation, side, role, or free-text search.',
};

export default function AircraftIndex() {
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
      <p className="sr-only">{aircraft.length} aircraft indexed.</p>

      <AircraftFilters />
    </div>
  );
}


