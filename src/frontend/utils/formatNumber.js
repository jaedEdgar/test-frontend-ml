export default function formatNumber(number) {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
