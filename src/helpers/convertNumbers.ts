//TODO : test

export function convertNumberToString(numToConvert: number): string {
  const formatter = Intl.NumberFormat('fr-FR', { maximumFractionDigits: 2 });
  return numToConvert >= 1.0e9
    ? formatter.format(numToConvert / 1.0e9) + ' B'
    : numToConvert >= 1.0e6
    ? formatter.format(numToConvert / 1.0e6) + ' M'
    : formatter.format(numToConvert).toString();
}
