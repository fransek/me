export const cn = (
  ...classes: (string | Record<string, boolean> | undefined)[]
) => {
  return classes
    .filter(Boolean)
    .map((c) => {
      if (typeof c === 'string') return c
      return Object.keys(c!)
        .filter((key) => c![key])
        .join(' ')
    })
    .join(' ')
}
