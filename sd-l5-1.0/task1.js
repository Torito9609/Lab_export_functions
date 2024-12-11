export function costCalculator(amount) {
  if (typeof number !== "number" || amount < 0) {
    console.log("Invalid input");
  }
  const fee = 3;
  const interest = 0.01;
  const total_to_pay = amount * interest + amount + fee;
  return total_to_pay;
}

console.log(costCalculator(124));
