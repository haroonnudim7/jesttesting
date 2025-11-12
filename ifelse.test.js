const checkWeird = require("./ifelse");

test("checks if n produces the correct message", () => {
  // n = 24 → Not Weird
  let result = checkWeird(24);
  expect(result.message).toBe("Not Weird");
  expect(result.endMessage).toBe("The End!");

  // n = 3 → Weird
  result = checkWeird(3);
  expect(result.message).toBe("Weird");
  expect(result.endMessage).toBe("The End!");

  // n = 4 → Not Weird
  result = checkWeird(4);
  expect(result.message).toBe("Not Weird");
  expect(result.endMessage).toBe("The End!");

  // n = 8 → Weird
  result = checkWeird(8);
  expect(result.message).toBe("Weird");
  expect(result.endMessage).toBe("The End!");
});
