import startMongo from "@/lib/startMongo"
import projectModel from "@/models/Project"

export default function handler(req, res) {
  if (req.method == "GET") {
    startMongo()
    console.log(projectModel)

    let firstProject = new projectModel({ name: "first", id: 0 })
    firstProject.save((err) => console.log(err))
    res.status(200).json(123)
  }
}
