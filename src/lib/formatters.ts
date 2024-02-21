export const formatDateRange = (start: Date, end: Date | undefined) => {
  const startStr = start.toLocaleString('default', {
    year: 'numeric',
    month: 'short',
  })
  const endStr =
    end?.toLocaleString('default', {
      year: 'numeric',
      month: 'short',
    }) ?? 'present'
  return `${startStr} - ${endStr}`
}
