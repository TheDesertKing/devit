import { parseNewIdea } from "../lib/parse/parseNewIdea"

describe("Data validation for new idea submitted via POST to /api/db/idea", () => {
  test("Parsing new idea with bad data", () => {
    expect(parseNewIdea({ abc: "efg" })).toBe(undefined)
  })

  test("Parsing new idea with no data", () => {
    expect(parseNewIdea({})).toBe(undefined)
  })

  test("Parsing new idea with full data", () => {
    const ideaData = {
      idea_title: "abababababa",
      idea_description: "testing!",
      idea_tags: ["test", "testing"],
      submitter_id: "idididid",
      related_projects: ["project1", "prj2"],
      related_ideas: ["firstIdea", "anotherONE"],
      links: ["https://hellow.com", "https://aloooo.net"],
    }
    expect(parseNewIdea(ideaData)).toStrictEqual(ideaData)
  })

  test("Parsing new idea with partial data", () => {
    const ideaData = {
      idea_title: "abc",
      idea_description: "description",
      submitter_id: "idididid",
    }
    expect(parseNewIdea(ideaData)).toStrictEqual(ideaData)
  })

  test("Parsing new idea with extra unrelated data", () => {
    const ideaData = {
      idea_title: "abcd",
      idea_description: "descripty",
      submitter_id: "idididid",
      ididos: "uh oh",
    }
    const expectedData = {
      idea_title: "abcd",
      idea_description: "descripty",
      submitter_id: "idididid",
    }
    expect(parseNewIdea(ideaData)).toStrictEqual(expectedData)
  })

  test("Parsing new idea with wrong data types on optional fields", () => {
    const ideaData = {
      idea_title: "abcd",
      submitter_id: "idididid",
      idea_description: 1234,
    }
    expect(parseNewIdea(ideaData)).toStrictEqual(undefined)
  })

  test("Parsing new idea with wrong data types on unrelated fields", () => {
    const ideaData = {
      idea_title: "abcd",
      submitter_id: "idididid",
      akjakjlajkljadsfk: 1234,
    }
    const expectedData = {
      idea_title: "abcd",
      submitter_id: "idididid",
    }
    expect(parseNewIdea(ideaData)).toStrictEqual(expectedData)
  })
})
