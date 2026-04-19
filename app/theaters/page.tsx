import Link from 'next/link';
import { aircraft } from '@/lib/aircraft';

export const metadata = {
  title: 'Theatres — Contrails & Cordite',
  description: 'The skies of the Second World War, region by region.',
};

type Theatre = {
  name: string;
  years: string;
  summary: string;
  body: string[];
  iconicAircraft: string[]; // slugs
  image: string;
};

const theatres: Theatre[] = [
  {
    name: 'Battle of Britain & the West',
    years: '1940 – 1945',
    summary: 'The crucial defensive air battle over southern England, the strategic bombing offensive against Germany, and the tactical air war over occupied Europe.',
    body: [
      'From the summer of 1940, when Fighter Command stood alone against the Luftwaffe, to the final operations over the Reich in 1945, the air war over Western Europe was continuously contested. Radar and the integrated Dowding System turned Britain\'s air defences into the most sophisticated in the world.',
      'The strategic bombing campaign — British by night, American by day — brought the war home to Germany on an unprecedented scale. Its effectiveness remains debated; its cost, for both crews and civilians, was staggering. Over 55,000 RAF Bomber Command aircrew were killed.',
      'The air war over the Channel and occupied Europe also produced the first jet combat, the first guided weapons, the first strategic cruise missiles, and a generation of tactical air doctrines that have shaped every air campaign since.',
    ],
    iconicAircraft: ['supermarine-spitfire', 'hawker-hurricane', 'messerschmitt-bf-109', 'avro-lancaster', 'b-17-flying-fortress', 'p-51-mustang'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Supermarine_Spitfire_Mk_Vb_of_92_Sqn_flown_by_Geoffrey_Wellum_1941.jpg?width=1400',
  },
  {
    name: 'Eastern Front',
    years: '1941 – 1945',
    summary: 'The largest and bloodiest theatre of the air war — a sprawling tactical contest across 3,000 km of steppe, forest, and ruined city.',
    body: [
      'The air war on the Eastern Front was dominated by tactical operations in support of enormous land armies. Strategic bombing played a minor role; ground-attack and battlefield air superiority were everything.',
      'The Luftwaffe began the campaign with superb aircraft and experienced crews, and racked up the highest scores in fighter history against initially disorganised Soviet forces. Ivan Kozhedub, the top-scoring Allied ace, flew La-5 and La-7 fighters; Erich Hartmann, the top-scoring ace in history, flew Bf 109s against them.',
      'Soviet industrial output — aided by Lend-Lease aircraft including Hurricanes, Kittyhawks, A-20s, and B-25s — eventually overwhelmed the Luftwaffe. By 1944 the VVS held numerical and qualitative superiority; by 1945 it was an instrument of conquest.',
    ],
    iconicAircraft: ['il-2-sturmovik', 'yak-3', 'la-5', 'junkers-ju-87-stuka', 'messerschmitt-bf-109', 'pe-2'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Il-2_Sturmovik.jpg?width=1400',
  },
  {
    name: 'Pacific',
    years: '1941 – 1945',
    summary: 'A war fought across vast oceanic distances, decided by carrier aviation and ended by strategic bombers.',
    body: [
      'The Pacific war was, above all, a naval air war. The carrier battles of 1942 — Coral Sea, Midway, Eastern Solomons, Santa Cruz — established aircraft as the decisive arm of modern sea power and sent battleships to permanent secondary status.',
      'The Imperial Japanese Navy began the war with superbly trained pilots flying the long-ranged A6M Zero. Its cadre of veteran aircrew could not be replaced, however; attrition through Guadalcanal and the Solomons bled the Navy Air Force white, and by 1944 the Americans had overwhelming superiority in numbers, training, and aircraft quality.',
      'The strategic bombing campaign by B-29s from the Marianas devastated Japanese cities. The final act — the atomic strikes at Hiroshima and Nagasaki — brought the war to an abrupt end and opened a new and darker age.',
    ],
    iconicAircraft: ['mitsubishi-a6m-zero', 'f6f-hellcat', 'f4u-corsair', 'sbd-dauntless', 'b-29-superfortress', 'p-38-lightning'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/F6F-3_Hellcat_VF-5_USN.jpg?width=1400',
  },
  {
    name: 'Mediterranean & North Africa',
    years: '1940 – 1945',
    summary: 'From Malta to Tunis to Monte Cassino — a seesaw air war across sea, desert, and mountain.',
    body: [
      'The Mediterranean was the proving ground for two Italian services that had ambition but struggled with obsolete aircraft. The Regia Aeronautica fielded capable designs like the Macchi C.202 and 205, but never in sufficient numbers.',
      'Malta became one of the most bombed places on earth, defended first by a handful of Sea Gladiator biplanes, then by Hurricanes, and finally by Spitfires flown in from carriers. Its survival kept the supply lines to Rommel\'s Afrika Korps under constant threat.',
      'Operations ranged from the desert air war in Libya and Egypt — where P-40s and Hurricanes hunted the Stuka — through the Tunisian campaign, the invasion of Italy, and the long grinding air war up the peninsula. The MATAF and Desert Air Force pioneered many of the tactical air-support doctrines used in Normandy.',
    ],
    iconicAircraft: ['p-40-warhawk', 'macchi-c202-folgore', 'supermarine-spitfire', 'junkers-ju-87-stuka', 'b-24-liberator'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Curtiss_P-40E_Warhawk_USAF.jpg?width=1400',
  },
  {
    name: 'Battle of the Atlantic',
    years: '1939 – 1945',
    summary: 'The convoy war — and the aircraft that finally closed the Mid-Atlantic Gap.',
    body: [
      'The Atlantic campaign was Britain\'s most dangerous moment: without the convoys from North America, the United Kingdom could not fight on. German U-boats came within weeks of cutting the supply line in 1942 and 1943.',
      'Air cover was the decisive factor. A U-boat submerged to avoid aircraft could not keep up with a convoy; one caught on the surface was extremely vulnerable. Shore-based maritime patrol by Sunderlands, Catalinas, and Liberators, combined with escort carriers and their Swordfish and Wildcats, transformed the odds.',
      'The closure of the Mid-Atlantic Gap by Very Long Range (VLR) Liberators in early 1943 — flying from Iceland and Newfoundland — marked the turning point. By "Black May" 1943, Dönitz was forced to withdraw his wolfpacks from the central Atlantic. The shipping lanes were safe.',
    ],
    iconicAircraft: ['b-24-liberator', 'tbf-avenger'],
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Consolidated_B-24_Liberator.jpg?width=1400',
  },
];

export default function Theatres() {
  return (
    <div>
      <header className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-3">
          § Volume III — The Theatres
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-bone-50 mb-4">Theatres of War</h1>
        <p className="text-bone-100/70 max-w-3xl text-lg">
          The air war was fought in five distinct theatres, each with its own geography,
          doctrines, and dominant aircraft. Below: the shape of each.
        </p>
      </header>

      <div className="space-y-24 pb-16">
        {theatres.map((t, i) => {
          const picks = t.iconicAircraft
            .map((s) => aircraft.find((a) => a.slug === s))
            .filter((a): a is NonNullable<typeof a> => !!a);

          return (
            <section key={t.name} className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className={i % 2 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] border border-olive-700/60 overflow-hidden corner-mark">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.image} alt="" className="w-full h-full object-cover img-treatment" />
                  </div>
                </div>
                <div className={i % 2 ? 'lg:order-1' : ''}>
                  <div className="font-mono text-xs text-brass-400 uppercase tracking-wider mb-2">
                    {t.years}
                  </div>
                  <h2 className="font-serif text-4xl text-bone-50 leading-tight">{t.name}</h2>
                  <p className="mt-4 font-serif italic text-xl text-brass-400 leading-snug">
                    {t.summary}
                  </p>
                  <div className="mt-6 space-y-4 text-bone-100/80 leading-relaxed">
                    {t.body.map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <div className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-3">
                      Iconic aircraft of this theatre
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {picks.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/aircraft/${p.slug}`}
                          className="text-xs font-display uppercase tracking-brutal border border-olive-700/60 px-3 py-1.5 text-bone-100/80 hover:border-brass-400 hover:text-brass-400 transition-colors"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
