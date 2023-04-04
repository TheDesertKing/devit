import { generate } from "ts-to-zod"
import fs from "fs"

const generateZod = () => {
  if (process.argv.length == 2) {
    console.log(
      "Please insert type file name\n\nExample:\tnode ts-to-zod.mjs typesFile\n"
    )
    return -1
  }
  const typePath = "../types/" + process.argv[2] + ".ts"
  const zodPath = "../types/zod/" + process.argv[2] + ".zod.ts"
  const typescript = fs.readFileSync(typePath, "utf8")
  try {
    const schemaGenerator = generate({
      sourceText: typescript,
      keepComments: true,
      skipParseJSDoc: true,
    })
    const schema = schemaGenerator.getZodSchemasFile()
    fs.writeFileSync(zodPath, schema)
  } catch (error) {
    console.log("Error!\n" + error)
  }
}

generateZod("userInterface.ts")
