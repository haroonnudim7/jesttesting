const functions = require("./function");

// beforeEach(() => initDatabase());
// afterEach(() => CloseDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => CloseDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const CloseDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// Addition
test("adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Not Equal
test("adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Null
test("should be null", () => {
  expect(functions.isNull(2, 2)).toBeNull();
});

// Falsy
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// Object Equality
test("user should be Haroon Nudim object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Haroon",
    lastName: "Nudim",
  });
});

// Less than or equal to
test("should be under or equal to 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Array
test("Admin should be in usernames", () => {
  const usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

// // Promise
// test('user fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham');
//     });
// });

// Async Await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
