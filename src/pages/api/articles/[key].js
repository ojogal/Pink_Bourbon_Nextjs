import Article from "@/models/article"
import dbConnect from "@/utils/dbConnect"

export default async function handler(req, res) {
  if (req.method == 'GET') {
    let article = await Article.findOne({ key: req.query.key }).lean()
    return res.status(200).json(article)
  }
}

dbConnect()
