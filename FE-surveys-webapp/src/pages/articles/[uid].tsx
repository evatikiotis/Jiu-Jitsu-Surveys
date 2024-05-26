import console from 'console';
import { createClient } from "../../prismicio";
import { components } from "../../slices";
import { SliceZone } from "@prismicio/react";




export default function Article({article}:{article:any}) {
  if(article) {
    return (<SliceZone slices={article.data.slices} components={components} />);
  } else{
    return (<></>);
  }
}

export async function getStaticProps({params}:{params:any}) {
  console.log(params.uid)
  const client = createClient();
  const article = await client
    .getByUID("article", params.uid);
  return {props: {article}};

}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client
    .getAllByType("article");

  const paths = articles.map((a) => ({
    params: { uid: a.uid.toString() },
  }))

  return { paths, fallback: true }
}



 
 

