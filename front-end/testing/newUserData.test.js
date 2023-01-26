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
