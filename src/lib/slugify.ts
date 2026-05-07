/** URL-safe slug; used when Sanity `slug.current` is missing. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'category'
}

export function categoryPathSlug(slug: string | null | undefined, title: string | null | undefined): string {
  const fromCms = typeof slug === 'string' && slug.trim().length > 0 ? slug.trim() : ''
  if (fromCms) return fromCms
  return slugify(title ?? 'category')
}

export type RowWithSlug = {slug: string | null; title: string | null}

/** Stable unique path slugs for a list of categories (matches CMS slug when set). */
export function assignCategoryPathSlugs<T extends RowWithSlug>(rows: T[]): Array<T & {pathSlug: string}> {
  const seen = new Set<string>()
  const out: Array<T & {pathSlug: string}> = []
  for (const row of rows) {
    if (!row.title?.trim()) continue
    let base = categoryPathSlug(row.slug, row.title)
    let unique = base
    let n = 2
    while (seen.has(unique)) {
      unique = `${base}-${n++}`
    }
    seen.add(unique)
    out.push({...row, pathSlug: unique})
  }
  return out
}
