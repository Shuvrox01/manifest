/**
 * Lightweight, code-managed "News" banner shown on the Overview page.
 *
 * To publish a new item: edit `CURRENT_NEWS` below (give it a fresh `id` so the
 * banner re-shows to everyone who dismissed the previous one). Set it to `null`
 * to hide the banner entirely.
 *
 * Constraints: the thumbnail must be self-hosted under `public/` and `href`
 * opens in a new tab — Manifest's CSP forbids external images/iframes.
 */
export interface NewsItem {
  /** Stable id — drives per-item dismissal persistence. Bump it for new news. */
  id: string;
  title: string;
  blurb: string;
  /** Self-hosted thumbnail path under `public/` (e.g. `/news/foo.jpg`). */
  thumbnail: string;
  /** External URL opened in a new tab when the card is clicked. */
  href: string;
  /** Call-to-action label, e.g. `Watch` or `Read`. */
  cta: string;
}

export const CURRENT_NEWS: NewsItem | null = null;
