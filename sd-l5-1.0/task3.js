export function ageCalculator(year, month, day) {
  const today = new Date();
  let age = today.getFullYear() - year;
  const current_month = today.getMonth() + 1;
  const current_day = today.getDate();
  if (month > current_month || (month === current_month && day > current_day)) {
    age--;
  }
  return age;
}
