import console from 'console';
import { createClient } from "../../prismicio";


export default function Article({article}) {
  
  return (
    <div>
      {article.uid}
    </div>
  );
}

export async function getStaticProps({params}) {
  console.log(params.uid)
  const client = createClient();
  const article = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());
  return {props: {article}};

}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client
    .getAllByType("article")
    .catch(() => notFound());

  const paths = articles.map((a) => ({
    params: { uid: a.uid.toString() },
  }))

  return { paths, fallback: false }
}



 
 


