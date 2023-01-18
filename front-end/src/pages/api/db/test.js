import startMongoAndGetModels from "@/lib/startMongo"

export default async function handler(req, res) {
  if (req.method == "GET") {
    // const models = await startMongoAndGetModels()// should i await this?
    let a = await startMongoAndGetModels().then((v) => console.log(v, v[0]))
    let b = await startMongoAndGetModels()
    // const a = startMongoAndGetModels()
    console.log(2, b)
    // a.then((value) => {
    //   console.log(3, a, value)
    //   res.status(200).send(a, value)
    // })
    console.log(1, b)
  }
}
