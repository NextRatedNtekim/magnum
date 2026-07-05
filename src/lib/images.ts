/**
 * All photography on this site is sourced from Unsplash (free license,
 * no attribution required — https://unsplash.com/license). Swap any of
 * these for real client photography by replacing the base URL in
 * src/data/content.ts; everything else (aspect ratio, lazy loading,
 * animations) keeps working unchanged.
 */
export function unsplashUrl(base: string, width: number, quality = 80): string {
  return `${base}?auto=format&fit=crop&q=${quality}&w=${width}`;
}
