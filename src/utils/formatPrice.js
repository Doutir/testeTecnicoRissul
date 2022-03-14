export function formatPrice(value, locale = 'pt-br', currency = 'BRL') {
  return value.toLocaleString(locale, {style: 'currency', currency});
}
