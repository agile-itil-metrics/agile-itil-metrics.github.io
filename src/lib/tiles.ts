// Six plain-language tile cards on each locale landing page. The topic each
// tile links to is fixed by number (TILE_TOPICS); its slug varies by locale
// and is looked up from that locale's own topics. Tile text lives in
// tiles/<locale>.json or tiles/<language>.json; a locale without its own file
// falls back to its language, and a language without a file shows the English tiles.

/** One tile card: a plain-language benefit and a link to the topic with more. */
export type Tile = { title: string; text: string; link: string };

/** Topic numbers the six tiles link to, in order. */
export const TILE_TOPICS = ['1.1', '1.2', '2.8', '3.1', '5.2', '11.0'];

const files = import.meta.glob<Tile[]>('./tiles/*.json', { eager: true, import: 'default' });

/** The tiles for a locale such as `de-at`, or `undefined` when none are written yet. */
export function tilesFor(locale: string): Tile[] | undefined {
  return (
    files[`./tiles/${locale}.json`] ?? files[`./tiles/${locale.split('-')[0]}.json`] ?? files['./tiles/en.json']
  );
}
