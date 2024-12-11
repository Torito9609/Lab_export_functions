export function rubricExcellent() {
  if (grade <= 5) {
    return "Fail";
  } else if (grade >= 8) {
    return "Excellent";
  } else {
    return "Pass";
  }
}
