import ArticleListItem from "../../components/ArticleListItem";
import { createClient } from "../../prismicio";

export default function Articles(props: any) {
  // eslint-disable-next-line react/prop-types
  const {articles} = props;
  return (
    <>
      <div>
        <div>
          <table className="table">
            <thead>
            <tr>
              <th className="display-none-small-screen" scope="col">
                {" "}
                #{" "}
              </th>
              <th scope="col"> Article</th>
              <th scope="col"> Created Date</th>
            </tr>
            </thead>
            <tbody>
            {articles.map((article: any, index: any) => (
              <ArticleListItem key={article.uid} article={article} index={index}/>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const client = createClient();

  const articles = await client
    .getAllByType("article");
  console.log("returned articles: ", articles.map(a => a.uid))
  return {props: {articles}};

}

