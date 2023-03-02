import Article from "@/models/article"
import dbConnect from "@/utils/dbConnect"

export default async function handler(req, res) {
  if (req.method == 'GET') {
    let articles = await Article.find()
    res.status(200).json(articles)
    return articles 
  } else if (req.method == 'POST') {
    Article.create(req.body).then(article => res.status(201).json(article))
  } else if (req.method == 'DELETE') {
    Article.deleteMany();
    return res.status(200).json({ message: 'Done' })
  }
}

dbConnect()
