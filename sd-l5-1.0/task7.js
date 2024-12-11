export function rubricPerfect() {
  if (grade <= 5) {
    return "Fail";
  } else if (grade > 5 && grade <= 8) {
    return "Excellent";
  } else if (grade == 11) {
    return "Perfect";
  } else {
    return "Pass";
  }
}
