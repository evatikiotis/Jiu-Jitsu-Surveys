import Markdown from 'react-markdown'
import { promises as fs } from 'fs';

export default function Article(props:any) {
    return (
        <div>
            <Markdown >{props.article}</Markdown>
        </div>
    );
}

export async function getStaticProps({params}:{params:any}) {
    const article = await fs.readFile("./src/articles/"+params.pid,  "utf8");
    console.log(article)
    return {props: {article}};
  
  }
  
  export async function getStaticPaths() {
    let paths =  (await fs.readdir("./src/articles")).map(p => "/articles/"+p)
    console.log("psths to render:", paths);
    return { paths, fallback: true }
  }
  
  
  
