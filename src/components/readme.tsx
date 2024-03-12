import { Converter } from "showdown";

const GITHUB_README_URL = "https://raw.githubusercontent.com/stanlino/stanlino/main/README.md";

export async function Readme() {

  const response = await fetch(GITHUB_README_URL);
  const readme = await response.text();

  const html = converter.makeHtml(readme)

  return (
    <div className="border rounded-md border-zinc-700 p-5 px-6 pb-3 flex flex-col gap-4">
      <span className="text-xs text-zinc-200">stanlino / README.<span className="text-zinc-400">md</span></span>
      <article className="break-words">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  )
}

const classes: Record<string, string> = {
  'p': 'flex flex-wrap gap-1 mb-4',
  'strong': 'text-sm',
  'h3': 'text-2xl font-bold -mb-4'
};

const textStyles = Object.keys(classes).map(key => ({
  type: 'output',
  regex: new RegExp(`<${key}(\\s+[^>]+)?>`, 'g'),
  replace: `<${key} class="${classes[key]}">`
}));

const imgStyles = {
  type: 'output',
  regex: /<img/g,
  replace: `<img class="max-h-44 rounded-md border border-zinc-700"`,
};

const converter = new Converter({
  ghCompatibleHeaderId: true,
  ghCodeBlocks: true,
  ghMentions: true,
  extensions: [...textStyles, imgStyles],
  noHeaderId: true,
});
