export const toCamelCase = (string: string): string => {
  const converted = string
    .split(' ')
    .map((fragment) => fragment.slice(0, 1).toUpperCase() + fragment.slice(1))
    .join('')

  return converted.slice(0, 1).toLowerCase() + converted.slice(1)
}
