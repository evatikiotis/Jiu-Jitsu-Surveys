import React from "react";
import Link from "next/link";

export default function ArticleListItem({ article, index }) {
  const surveyId = article.uid;
  return (
    <>
      <tr>
        <th className="display-none-small-screen" scope="row">
          {index + 1}
        </th>
        <td>
          <Link href={`/articles/${surveyId}`}>
            {article.uid}</Link></td>

        <td>{article.first_publication_date}</td>
      </tr>
    </>
  );
}
