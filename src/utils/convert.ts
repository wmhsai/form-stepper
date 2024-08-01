export function englishToFarsiNumber(n: number | string) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n
    ?.toString()
    ?.split('')
    ?.map((x: string) => farsiDigits[parseInt(x)])
    ?.join('');
}

export function generateUniqueKey() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function formatWithCommas(value: number | undefined): string {
  return value !== undefined ? value.toLocaleString() : 'N/A';
}