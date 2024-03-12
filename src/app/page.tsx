import { Achievements } from "@/components/achievements";
import Image from "next/image";
import { Converter } from "showdown";

const GITHUB_README_URL = "https://raw.githubusercontent.com/stanlino/stanlino/master/README.md";
const GITHUB_PROFILE_URL = "https://api.github.com/users/stanlino";

export default async function Home() {

  const [readmeResponse, profileResponse] = await Promise.all([fetch(GITHUB_README_URL),fetch(GITHUB_PROFILE_URL)]);
  const [readme, profile]: [string, GithubProfile] = await Promise.all([readmeResponse.text(), profileResponse.json()]);

  const html = converter.makeHtml(readme)

  return (
    <div className="pt-36 bg-zinc-900 h-screen">
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-8 gap-2">
        <div className="col-span-7 sm:col-span-2">
          <Image src={profile.avatar_url} width={296} height={296} alt="Stanley Filipe" className="rounded-full border border-zinc-700" />
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold mt-5">Stanley Filipe</h1>
              <p className="text-zinc-400">
                {profile.bio}
              </p>
            </div>
            <ul className="flex flex-col gap-1 text-sm text-zinc-300">
              <li className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="rgb(212 212 216)" fill="none">
                  <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5" />
                  <path d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z" stroke="currentColor" stroke-width="1.5" />
                </svg>
                Palmas, TO
              </li>
              <li className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="rgb(212 212 216)" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                  <path d="M12 8V12L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {Intl.DateTimeFormat('pt-BR', {
                  hour: 'numeric',
                  minute: 'numeric',
                }).format(new Date())} <span className="text-zinc-400">(UTC -03:00)</span>
              </li>
            </ul>
          </div>
          <Achievements />
        </div>
        <div className="col-span-7 sm:col-span-6 border mx-3 rounded-md border-zinc-700 p-5 px-6 pb-3 flex flex-col gap-4">
          <div>
            <span className="text-xs text-zinc-200">stanlino / README.<span className="text-zinc-400">md</span></span>
          </div>
          <article className="break-words">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
        </div>
      </div>
    </div>
  );
}

const classes: Record<string, string> = {
  'p': 'flex flex-wrap gap-1 mb-4',
  'strong': 'text-sm',
  'h3': 'text-2xl font-bold -mb-4'
};

const bindings = Object.keys(classes).map(key => ({
  type: 'output',
  regex: new RegExp(`<${key}(\\s+[^>]+)?>`, 'g'),
  replace: `<${key} class="${classes[key]}">`
}));

const converter = new Converter({
  ghCompatibleHeaderId: true,
  ghCodeBlocks: true,
  ghMentions: true,
  extensions: [...bindings],
  noHeaderId: true,
});

export interface GithubProfile {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: any
  hireable: any
  bio: string
  twitter_username: any
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}
