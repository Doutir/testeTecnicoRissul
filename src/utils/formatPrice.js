export function formatPrice(value, locale = 'pt-br', currency = 'BRL') {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}
