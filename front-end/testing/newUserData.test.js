const { parseNewUser } = require("@/api/db/user.ts")

test("Creating new user with bad data", () => {
  expect(parseNewUser({ abc: "efg" })).toBe(undefined)
})

test("Creating new user with no data", () => {
  expect(parseNewUser({})).toBe(undefined)
})

test("Creating new user with full data", () => {
  const userData = {
    username: "testos",
    user_description: "testing!",
    user_tags: ["test", "testing"],
    github_account_link: "https://github.com/TheDesertKingabc",
  }
  expect(parseNewUser(userData)).toStrictEqual(userData)
})

test("Creating new user with partial data", () => {
  const userData = {
    username: "abc",
    user_description: "description",
  }
  expect(parseNewUser(userData)).toStrictEqual(userData)
})

test("Creating new user with extra unrelated data", () => {
  const userData = {
    username: "abcd",
    user_description: "descripty",
    ididos: "uh oh",
  }
  const expectedData = {
    username: "abcd",
    user_description: "descripty",
  }
  expect(parseNewUser(userData)).toStrictEqual(expectedData)
})

test("Creating new user with wrong data types on optional fields", () => {
  const userData = {
    username: "abcd",
    user_description: 1234,
  }
  expect(parseNewUser(userData)).toStrictEqual(undefined)
})

test("Creating new user with wrong data types on unrelated fields", () => {
  const userData = {
    username: "abcd",
    akjakjlajkljadsfk: 1234,
  }
  const expectedData = {
    username: "abcd",
  }
  expect(parseNewUser(userData)).toStrictEqual(expectedData)
})
