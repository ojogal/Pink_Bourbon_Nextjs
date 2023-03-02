import dbConnect from "@/utils/dbConnect";
import Article from "@/models/article";
import { useState } from "react";

export default function ({ articles }) {
  const [article, setArticle] = useState({});

  const openArticle = (key) => {
    fetch(`/api/articles/${key}`).then(res => res.json()).then(data => setArticle(data));

  };

  return (
    <>
      <div className='main-wrapper'>
        <div className='section'>
          {
            articles.map((article, index) =>
              <>
                <div className='name-card'
                  onClick={() => openArticle(article.key)}
                  style={{ cursor: "pointer" }}
                  key={index}>
                  <h2>{article.title}</h2>
                </div>
              </>
            )
          }
        </div>
        <div className='section'>
          {article.key ?
            <div className='content-card'>
              <h2>{article.title}</h2> <article>{article.content}</article>
            </div> : <></>}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  await dbConnect();
  const articles = await Article.find().select('-_id').sort({ created_at: -1 }).lean();
  return { props: { articles } }
}

