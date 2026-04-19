export default function Footer() {
  return (
    <footer className="border-t border-olive-700/60 bg-ink-950/90 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-display text-lg tracking-brutal text-brass-400 uppercase">
              Contrails
            </span>
            <span className="text-bone-300/40 font-serif italic">&</span>
            <span className="font-display text-lg tracking-brutal text-bone-100 uppercase">
              Cordite
            </span>
          </div>
          <p className="text-sm text-bone-100/60 leading-relaxed max-w-sm">
            A dossier of the aircraft that fought the Second World War — their engineers,
            their crews, and the theatres where they flew, fought, and fell.
          </p>
        </div>

        <div>
          <h3 className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-3">
            Sections
          </h3>
          <ul className="space-y-2 text-sm text-bone-100/70">
            <li><a href="/aircraft" className="link-vintage">Aircraft Index</a></li>
            <li><a href="/timeline" className="link-vintage">Timeline</a></li>
            <li><a href="/theaters" className="link-vintage">Theatres of War</a></li>
            <li><a href="/about" className="link-vintage">About</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase tracking-brutal text-xs text-brass-400 mb-3">
            Acknowledgements
          </h3>
          <p className="text-xs text-bone-100/50 leading-relaxed">
            Historical imagery courtesy of the Imperial War Museum, US National Archives,
            Bundesarchiv, and Wikimedia Commons contributors. All images used under their
            respective public-domain or Creative Commons licences.
          </p>
        </div>
      </div>

      <div className="border-t border-olive-700/40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-bone-100/40 font-mono">
            Lest we forget.
          </p>
          <p className="text-xs text-bone-100/40 font-mono">
            An enthusiast project · Non-commercial · Educational use
          </p>
        </div>
      </div>
    </footer>
  );
}
