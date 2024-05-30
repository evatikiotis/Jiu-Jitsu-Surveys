import Markdown from 'react-markdown'

export default function About() {
    const markdown = '# Hi, *Pluto*!'
    return (
        <div>
            <Markdown >{markdown}</Markdown>
        </div>
    );
}
