export const metadata = {
  title: 'Timeline — Contrails & Cordite',
  description: 'Key events of the air war, 1935 – 1945.',
};

type Event = {
  date: string;
  title: string;
  body: string;
  tag?: 'Axis' | 'Allied' | 'Neutral' | 'Civil';
};

const events: Event[] = [
  { date: '28 May 1935', tag: 'Axis', title: 'Bf 109 first flight', body: 'Willy Messerschmitt\'s prototype — the aircraft destined to fly in every Luftwaffe combat unit of the war — takes to the air for the first time.' },
  { date: '5 March 1936', tag: 'Allied', title: 'Supermarine Spitfire first flight', body: 'Mitchell\'s elliptical-winged monoplane leaves Eastleigh for twenty-three minutes. The RAF orders 310 aircraft within three months.' },
  { date: '26 April 1937', tag: 'Axis', title: 'Guernica', body: 'The Condor Legion demonstrates the technique of the terror raid over the Basque town. Its lessons are studied everywhere.' },
  { date: '1 September 1939', tag: 'Axis', title: 'Invasion of Poland', body: 'Ju 87 Stukas scream into action as the Luftwaffe executes the first Blitzkrieg campaign. The Polish Air Force fights hard but is destroyed.' },
  { date: '10 May 1940', tag: 'Axis', title: 'Fall Gelb — Invasion of France', body: 'German air superiority underpins the armour thrust through the Ardennes. By 25 June, France is out of the war.' },
  { date: '10 July 1940', tag: 'Allied', title: 'Battle of Britain begins', body: 'Fighter Command, radar-equipped and desperately outnumbered, must hold the line over southern England. The next twelve weeks will decide whether Britain fights on.' },
  { date: '15 September 1940', tag: 'Allied', title: 'Battle of Britain Day', body: 'Peak Luftwaffe effort is met and broken. The invasion, Operation Sealion, is indefinitely postponed. Hitler turns east.' },
  { date: '11 November 1940', tag: 'Allied', title: 'Taranto', body: 'RN Swordfish torpedo biplanes strike the Italian fleet in harbour — a blueprint studied closely by Japanese naval planners.' },
  { date: '7 December 1941', tag: 'Axis', title: 'Pearl Harbor', body: 'Six Japanese carriers launch 353 aircraft in two waves. Eight American battleships are hit; four are sunk. The United States enters the war.' },
  { date: '10 December 1941', tag: 'Axis', title: 'Force Z destroyed', body: 'G4M and G3M bombers sink HMS Prince of Wales and HMS Repulse off Malaya — the first capital ships destroyed at sea by aircraft alone.' },
  { date: '18 April 1942', tag: 'Allied', title: 'Doolittle Raid', body: 'Sixteen B-25B Mitchells launch from USS Hornet to bomb Tokyo. Material damage is negligible; the psychological effect is enormous on both sides.' },
  { date: '4–7 June 1942', tag: 'Allied', title: 'Battle of Midway', body: 'SBD Dauntless dive bombers catch four Japanese fleet carriers with armed, fuelled aircraft on deck. Three are destroyed in minutes; a fourth follows. The tide turns.' },
  { date: '17 August 1942', tag: 'Allied', title: '8th Air Force first heavy mission', body: 'Twelve B-17s strike the Rouen-Sotteville marshalling yards. The strategic bombing of Europe begins in earnest.' },
  { date: '30–31 May 1942', tag: 'Allied', title: 'First Thousand-Bomber Raid', body: 'RAF Bomber Command sends 1,047 aircraft against Cologne under Operation Millennium — a demonstration of Harris\'s vision for area bombing.' },
  { date: '17 May 1943', tag: 'Allied', title: 'Operation Chastise — the Dambusters', body: '617 Squadron Lancasters breach the Möhne and Eder dams with the Upkeep bouncing bomb. Eight of nineteen aircraft are lost.' },
  { date: '17 August 1943', tag: 'Allied', title: 'Schweinfurt-Regensburg', body: 'Sixty B-17s lost in a single day of unescorted deep-penetration raids. The limits of daylight bombing without escort are made brutally clear.' },
  { date: '6 March 1944', tag: 'Allied', title: 'Berlin daylight', body: 'P-51 Mustangs escort B-17s all the way to the German capital. The Luftwaffe day-fighter force, bled white in defence, never recovers.' },
  { date: '6 June 1944', tag: 'Allied', title: 'D-Day', body: 'Complete Allied air superiority over the Normandy beachhead. Typhoons, Thunderbolts, and Spitfires hunt anything that moves behind the lines.' },
  { date: '13 June 1944', tag: 'Axis', title: 'First V-1 attack on London', body: 'The Fieseler Fi 103 flying bomb announces a new era of unmanned aerial weapons. Intercepted by the fastest piston fighters — Tempests, Meteors, Mustangs.' },
  { date: '19–20 June 1944', tag: 'Allied', title: 'Great Marianas Turkey Shoot', body: 'US Navy Hellcats annihilate Japanese naval aviation at the Battle of the Philippine Sea. Japan loses 346 aircraft; the USN loses 30.' },
  { date: '25 July 1944', tag: 'Axis', title: 'Me 262 first operational sortie', body: 'The world\'s first operational jet fighter flies against Allied reconnaissance over Germany. Too few, too late — but a glimpse of what comes next.' },
  { date: '13–15 February 1945', tag: 'Allied', title: 'Dresden', body: 'Combined RAF and USAAF raids ignite a firestorm that kills tens of thousands of civilians. Strategic bombing\'s moral questions have never fully settled.' },
  { date: '9–10 March 1945', tag: 'Allied', title: 'Tokyo firebombing', body: 'Roughly 100,000 die as 279 B-29s under LeMay drop incendiaries on the Japanese capital. The deadliest air raid in history.' },
  { date: '6 August 1945', tag: 'Allied', title: 'Hiroshima', body: 'The B-29 "Enola Gay" drops the "Little Boy" uranium weapon over the Japanese city. Three days later, Nagasaki.' },
  { date: '2 September 1945', tag: 'Neutral', title: 'Surrender', body: 'Japan signs the Instrument of Surrender aboard USS Missouri in Tokyo Bay. The Second World War ends. The air age has arrived.' },
];

const tagColor: Record<NonNullable<Event['tag']>, string> = {
  Axis: 'text-rust-500 border-rust-500/40',
  Allied: 'text-brass-400 border-brass-400/40',
  Neutral: 'text-bone-100/70 border-bone-100/30',
  Civil: 'text-olive-500 border-olive-500/40',
};

export default function Timeline() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="font-display uppercase tracking-brutal text-sm text-brass-400 mb-3">
        § Volume II — The Chronology
      </div>
      <h1 className="font-serif text-5xl md:text-6xl text-bone-50 mb-6">Timeline of the Air War</h1>
      <p className="text-bone-100/70 max-w-3xl text-lg">
        From the first prototypes of the mid-1930s through the surrenders of 1945, a decade that
        reshaped the shape of military aviation and, with it, the shape of the modern world.
      </p>

      <div className="mt-16 relative">
        {/* timeline rail */}
        <div className="absolute left-[7.5rem] md:left-[9rem] top-0 bottom-0 w-px bg-olive-700/60" aria-hidden />

        <ol className="space-y-10">
          {events.map((e, i) => (
            <li key={i} className="relative grid grid-cols-[7rem_1fr] md:grid-cols-[8.5rem_1fr] gap-6">
              <div className="text-right pr-3">
                <div className="font-display uppercase tracking-brutal text-xs text-brass-400 leading-tight">
                  {e.date}
                </div>
              </div>

              <div className="relative pl-6">
                <span
                  className="absolute -left-[0.4rem] top-2 w-3 h-3 rotate-45 bg-ink-950 border border-brass-400"
                  aria-hidden
                />
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="font-serif text-xl text-bone-50">{e.title}</h3>
                  {e.tag && (
                    <span
                      className={`text-[10px] font-display uppercase tracking-brutal px-2 py-0.5 border ${tagColor[e.tag]}`}
                    >
                      {e.tag}
                    </span>
                  )}
                </div>
                <p className="text-bone-100/80 leading-relaxed">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
