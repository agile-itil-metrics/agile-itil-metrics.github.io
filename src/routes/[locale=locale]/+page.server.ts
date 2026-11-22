import { error } from '@sveltejs/kit';
import { isLocale, LOCALE_SLUGS } from '#lib/book.js';
import { sectionPath } from '#lib/segments.js';
import { toc } from '#lib/server/book.js';
import { TILE_TOPICS } from '#lib/tiles.js';

/** One landing page per locale: the hero, with a link on to the contents page. */
export function entries() {
  return LOCALE_SLUGS.map((locale) => ({ locale }));
}

export function load({ params }) {
  if (!isLocale(params.locale)) error(404, `No locale named "${params.locale}"`);
  // Each tile links to its topic in this locale, else the English topic, else the contents.
  const own = toc(params.locale);
  const en = toc('en-001');
  const tileHrefs = TILE_TOPICS.map((number) => {
    const mine = own.find((t) => t.number === number && t.written);
    if (mine) return sectionPath(params.locale, 'topics', mine.slug);
    const english = en.find((t) => t.number === number && t.written);
    if (english) return sectionPath('en-001', 'topics', english.slug);
    return sectionPath(params.locale, 'contents');
  });
  return { locale: params.locale, tileHrefs };
}
