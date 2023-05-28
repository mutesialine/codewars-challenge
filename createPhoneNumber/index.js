function createPhoneNumber(numbers) {
  let phoneNumber = "(xxx) xxx-xxxx";
  for (const digit of numbers) {
    phoneNumber = phoneNumber.replace("x", digit);
  }
  return phoneNumber;
}
