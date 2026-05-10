/**
 * Decorative gradient + orbs behind storefront chrome (glass refracts over this layer).
 * Tones: cream/blush field, wine and champagne-gold light pools (luxury fragrance retail).
 */
export function StoreSceneBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-stone-100/95 via-rose-100/80 to-amber-50/90"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed top-16 left-0 -z-10 h-72 w-72 -translate-x-1/3 rounded-full bg-rose-500/25 blur-3xl sm:h-80 sm:w-80 sm:-translate-x-1/4"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed right-0 bottom-8 -z-10 h-80 w-80 translate-x-1/3 rounded-full bg-amber-400/35 blur-3xl sm:h-96 sm:w-96 sm:translate-x-1/4"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/15 blur-3xl"
        aria-hidden
      />
    </>
  );
}
