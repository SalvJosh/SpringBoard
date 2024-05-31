it("should calculate the monthly rate correctly", function () {
  // ...
  const values = {
    amount: 5000,
    years: 10,
    rate: 6.7,
  };
  expect(calculateMonthlyPayment(values)).toEqual("57.28");
});

it("should return a result with 2 decimal places", function () {
  // ..
  const values = {
    amount: 7006,
    years: 7,
    rate: 3.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("95.12");
});

/// etc
