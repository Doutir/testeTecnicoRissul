import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function formatPrice(value, currency = 'BRL') {
  // return value.toLocaleString(locale, {style: 'currency', currency});
  return Intl.NumberFormat([], {style: 'currency', currency}).format(value);
}
